# Project notes for Claude

This repo contains two independent things:

1. **`index.html` + `assets/`** — "Thailand in Light", a Thai portrait photography
   site (the original content, served from the repo root via GitHub Pages).
   Do not touch it when working on the dashboard.

2. **`dashboard/`** — the **Rubber Market Intel dashboard**: a self-contained web
   dashboard that visualizes David Zhao's market-analysis emails (he is a rubber
   trader at Olam Agri, Thailand). This is the actively maintained part.

## The dashboard (memory)

- `dashboard/index.html` — the page. Vanilla HTML/JS/SVG, zero dependencies,
  light/dark themes, charts: sentiment timeline, SGX TSR20, Thai physical prices
  (USS/RSS3/cup lump/latex), TOCOM–SICOM spread, weekly email volume by source,
  themes, latest-readings table, filterable email feed.
- `dashboard/data.js` — the dataset, one JSON entry per email. Schema documented in
  its header comment. **This is the only file the daily update modifies.**
- `dashboard/README.md` — usage and scheduling notes.
- `.claude/commands/update-dashboard.md` — the `/update-dashboard` command: the full
  daily extraction procedure (Outlook searches, sender→source map, include/exclude
  rules, Okachi PDF attachment parsing, sentiment scoring, canonical metric keys,
  dedupe by internetMessageId, commit + push).

### Daily maintenance

Run `/update-dashboard` once a day (ideally ~07:30 Asia/Bangkok, after the Okachi
Morning Rubber Report arrives). It appends new emails to `dashboard/data.js`,
validates with `node --check`, commits and pushes. Runs are idempotent — the search
window overlaps and entries are deduped by id.

Key email sources (see the command file for the full map): David's own
"Weekly Update as of …" sends in Sent Items, peter.gao@olamagri.com (team),
bon@okachi.jp (Okachi — always read the PDF attachment), nova_dealing@phillip.com.sg,
rtasing@singnet.com.sg, terencet@dbs.com, observatory@mail.observatorygroup.com,
xyhong@hzinsights.com, bigdata.mailer@olamnet.com. Never ingest ops noise
(deal registers, position reports, cycle time, M2M, currency cover, invoices,
webinars).

### Environment quirks

- In cloud sessions, if `git push` returns 403, GitHub write access is missing —
  the Claude GitHub app must be installed on `davidhuiz-2415` with write access to
  this repo. Pushes can also be done via the GitHub MCP `push_files` tool.
- Working branch for dashboard development: `claude/market-analysis-email-dashboard-sqxfgx`
  (merge into `main` to publish on GitHub Pages at `/dashboard/`).
