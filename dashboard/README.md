# Rubber Market Intel — email dashboard

A self-contained web dashboard that distills David Zhao's market-analysis emails
(own weekly updates, team briefs, broker reports incl. Okachi PDF settlement tables,
research, association quotations, news digests) into trends: sentiment over time,
futures & Thai physical prices, spreads, email volume and recurring themes, plus a
filterable feed of every extracted email.

## Files

- `index.html` — the dashboard. No build step, no external dependencies. Open it
  locally (double-click) or serve it via GitHub Pages (`/dashboard/` once this branch
  is merged into the Pages branch).
- `data.js` — the growing dataset, one entry per email. Schema is documented in the
  file header. This is the only file the daily update touches.
- `../.claude/commands/update-dashboard.md` — the `/update-dashboard` command that
  tells Claude how to extract, classify, score and append new emails.

## Updating it every day

The extraction needs Claude + the Microsoft 365 connector, so the daily refresh runs
as a Claude session, any of these ways:

1. **Manual (simplest):** open a Claude Code session on this repo and run
   `/update-dashboard`. Takes a couple of minutes; commits and pushes automatically.
2. **Scheduled:** on claude.ai/code, create a scheduled task on this repository with
   the prompt `/update-dashboard`, set to run each morning (e.g. 07:30 Bangkok time,
   after the Okachi morning report and overnight settlement emails arrive).
3. **From the terminal:** `claude -p "/update-dashboard"` in this repo, wired to any
   scheduler you like on a machine where Claude Code has the Microsoft 365 connector.

Each run appends only new emails (deduped by internetMessageId), so runs are
idempotent and gaps self-heal on the next run (the search window always overlaps).

## Reading the dashboard

- **KPI tiles** — latest SGX TSR20, USS, cup lump, USD/THB and the current tone from
  the most recent opinionated email; deltas vs the previous reading.
- **Sentiment over time** — every analysis email scored −2…+2. Your own weekly
  updates dominate this series, so it doubles as a journal of your market view.
- **Price charts** — points are *as reported in emails* on the stated date, not a
  continuous market feed. They get denser as the daily update accumulates data.
- **Email volume / themes** — reflect only extracted emails, not total mailbox traffic.
- **Feed** — every email with source, sentiment, summary, themes, extracted metrics,
  and a link back to the message in Outlook.

Filters (range, source, search) apply to all charts and the feed. Light/dark theme
follows your OS, with a manual toggle.
