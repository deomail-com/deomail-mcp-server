# DeoMail MCP Server

Let Claude Desktop, Cursor, Windsurf, VS Code and any MCP client manage your **DeoMail** inbox on your own domain: read, search, reply, archive, mark read, and delete.

[DeoMail](https://deomail.com) is free custom-domain email hosting (1 mailbox, 500 MB, 100 sends/day free forever) with a REST API on every plan.

## Tools
| Tool | What it does |
|---|---|
| `list_emails` | List or search the inbox |
| `read_email` | Read one email |
| `send_email` | Send or reply |
| `update_email` | Mark read/unread, archive, star |
| `delete_email` | Move to Trash (recoverable 30 days) |
| `verify_fingerprint` | Check a Fingerprint-signed email |

## Setup
1. Create an API key in DeoMail → Settings → API Keys.
2. Add to your MCP client config (Claude Desktop: `claude_desktop_config.json`, Cursor: `.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "deomail": {
      "command": "npx",
      "args": ["-y", "deomail-mcp"],
      "env": { "DEOMAIL_API_KEY": "dm_your_key_here" }
    }
  }
}
```
3. Restart the client and ask: *"Check my DeoMail inbox, archive newsletters, and draft replies to customers."*

## Limits
Free: 100 API requests/hour. Usage policy: 1-to-1 communication only, no bulk or cold email.

## Links
- API docs: https://deomail.com/api
- AI agents guide: https://deomail.com/ai-agents
- OpenAPI: https://deomail.com/openapi.json

MIT License
