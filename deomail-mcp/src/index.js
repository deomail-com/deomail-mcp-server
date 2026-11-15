#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const KEY = process.env.DEOMAIL_API_KEY;
const BASE = process.env.DEOMAIL_API_URL || "https://api.deomail.com";
if (!KEY) { console.error("Set DEOMAIL_API_KEY"); process.exit(1); }

async function call(method, path, body) {
  const res = await fetch(BASE + path, {
    method,
    headers: { "X-API-Key": KEY, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  return { content: [{ type: "text", text: `HTTP ${res.status}\n${text}` }], isError: !res.ok };
}

const server = new McpServer({ name: "deomail", version: "1.0.0" });

server.tool("list_emails", "List or search emails in the DeoMail inbox",
  { folder: z.string().optional(), search: z.string().optional(), unread: z.boolean().optional(), limit: z.number().int().max(100).optional() },
  async (a) => {
    const q = new URLSearchParams();
    for (const [k, v] of Object.entries(a)) if (v !== undefined) q.set(k, String(v));
    return call("GET", `/v1/emails?${q}`);
  });
server.tool("read_email", "Read one email with body", { id: z.string() }, ({ id }) => call("GET", `/v1/emails/${id}`));
server.tool("send_email", "Send or reply to an email",
  { from: z.string(), to: z.array(z.string()), subject: z.string(), html: z.string().optional(), text: z.string().optional(),
    cc: z.array(z.string()).optional(), bcc: z.array(z.string()).optional(), in_reply_to: z.string().optional() },
  (a) => call("POST", "/v1/send", a));
server.tool("update_email", "Mark read/unread, archive or star an email",
  { id: z.string(), is_read: z.boolean().optional(), is_archived: z.boolean().optional(), is_starred: z.boolean().optional() },
  ({ id, ...p }) => call("PATCH", `/v1/emails/${id}`, p));
server.tool("delete_email", "Move an email to Trash (recoverable 30 days)", { id: z.string() }, ({ id }) => call("DELETE", `/v1/emails/${id}`));
server.tool("verify_fingerprint", "Verify a DeoMail Fingerprint ID (DM-XXXXXX)", { fingerprint_id: z.string() },
  ({ fingerprint_id }) => call("GET", `/v1/verify/${fingerprint_id}`));

await server.connect(new StdioServerTransport());
