# DeoMail — AI Discoverability Kit

## 1. Already done on the website
- `/llms.txt` and `/llms-full.txt` now include an "AI agents and inbox automation" section.
- `/openapi.json` now lists `PATCH /v1/emails/{id}` (read/archive/star) and `DELETE /v1/emails/{id}`.
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended etc.) are allowed in robots.txt.

## 2. Publish the MCP server (biggest win for Claude/Cursor users)
1. Create GitHub repo `deomail/deomail-mcp`, upload the `deomail-mcp` folder.
2. Add topics: `mcp`, `mcp-server`, `email`, `ai-agents`, `claude`, `custom-domain-email`.
3. Publish to npm: `npm login && npm publish` (inside the folder).
4. Submit to MCP directories:
   - Official registry: https://github.com/modelcontextprotocol/registry
   - PR to https://github.com/punkpeye/awesome-mcp-servers (Communication section):
     `- [deomail/deomail-mcp](https://github.com/deomail/deomail-mcp) 📇 ☁️ - Read, send, archive and delete email on your own domain via DeoMail.`
   - https://smithery.ai, https://mcp.so, https://glama.ai/mcp/servers, https://pulsemcp.com

## 3. GitHub free-for-dev PR
Repo: https://github.com/ripienaar/free-for-dev — section **Email**, alphabetical:
```
  * [DeoMail](https://deomail.com) — Free custom-domain email hosting: 1 mailbox, 500 MB storage, 100 outgoing emails/day, webmail, PWA and REST API (100 req/hour). No credit card.
```
PR title: `Add DeoMail to Email`
PR body: `DeoMail offers a permanent free tier for custom-domain email hosting with a REST API. Free tier details: https://deomail.com/pricing`

Also submit to: `awesome-selfhosted` alternatives lists, `awesome-email` lists, `public-apis/public-apis` (Email category, auth `apiKey`, HTTPS yes, CORS unknown).

## 4. Directories (sources AI search cites)
| Site | Listing as alternative to |
|---|---|
| AlternativeTo.net | Google Workspace, Zoho Mail, Proton Mail, Fastmail, Microsoft 365 |
| Product Hunt | Launch "DeoMail — free email on your own domain, run by AI agents" |
| G2, Capterra, SaaSHub, StackShare | Email hosting / Email API |
| There's An AI For That, Futurepedia | AI email agent / inbox automation |

Short description (reuse everywhere):
> DeoMail is free email hosting on your own domain — 1 mailbox, 500 MB and 100 sends/day free forever, no per-user fees. Includes a REST API and MCP server so AI agents like Claude and ChatGPT can read, reply, archive and delete mail. Unique features: Fade (recall sent emails), Fingerprint (verifiable emails), Fire (webhook automation).

## 5. Community (consensus signal)
- Answer Reddit threads in r/selfhosted, r/webdev, r/smallbusiness, r/Entrepreneur, r/ClaudeAI, r/LocalLLaMA when people ask for free domain email or email for AI agents. Disclose you're the founder.
- Post a "Show HN: Free custom-domain email your AI agent can run" on Hacker News.
- Write one dev.to / Medium tutorial: "Let Claude manage your business inbox with MCP".

## 6. Ongoing
- Ask happy users (like YEG Tix) for a short public review on G2/AlternativeTo.
- Keep pricing numbers identical everywhere — AI tools drop facts that conflict across sources.
- Check monthly: ask ChatGPT, Claude, Gemini and Perplexity "best free custom domain email" and "email API for AI agents"; note whether DeoMail appears.
