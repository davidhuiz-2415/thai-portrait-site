# Update the market-analysis email dashboard

You are updating `dashboard/data.js` with new market-analysis emails from David Zhao's
Outlook mailbox (Microsoft 365 MCP tools), then pushing to git so the dashboard page
reflects today's state. Follow this procedure exactly.

## 1. Determine the window

Read `dashboard/data.js`. Find the most recent `date` among `emails[]` and the set of
existing `id`s (internetMessageId is the dedupe key). Search Outlook from **one day
before** that date through now (overlap is fine — dedupe handles it).

## 2. Collect candidate emails

Use `mcp__Microsoft_365__outlook_email_search` with `afterDateTime` set to the window
start. Run ALL of these searches (25/page, paginate if needed):

1. `query: "rubber market"` — catches most daily flow
2. `query: "market analysis"` and `query: "macro"`
3. `folderName: "Sent Items", query: "weekly update"` — David's own updates to
   mohit.agarwal / vijeth.shetty / benjamin.lim, and self-sent weekly briefs
4. Known senders (one search each, `sender:` filter):
   - `peter.gao@olamagri.com` — China Rubber Team weekly brief (source: team)
   - `bon@okachi.jp` — Okachi Morning Rubber Report (source: broker)
   - `nova_dealing@phillip.com.sg` — SGX Rubber Settlement Prices & News (broker)
   - `rtasing@singnet.com.sg` — RTAS daily quotations, ARBC prices, ANRPC monthly (association)
   - `terencet@dbs.com` — DBS Macro Strategy (broker)
   - `observatory@mail.observatorygroup.com` — Observatory Group macro (research)
   - `xyhong@hzinsights.com` — Horizon Insights China research (research)
   - `bigdata.mailer@olamnet.com` — Rubber News Media Report (news)

**INCLUDE**: anything that is market analysis, macro commentary, fundamentals,
prices/quotations, positioning/flows color — from brokers, the team, associations,
research houses, or David's own updates to team/boss.

**EXCLUDE** (ops/admin noise, never add these): Deal Register Purchase/Sales, Rubber
Cycle Time Report, Position Reports, CP Limit vs Utilization, Counter Party M2M,
Currency cover, Shipment/contract lists, invoices, IT notices, webinar/seminar
marketing, calendar invites. Duplicate re-sends of the same report (e.g. repeated
ANRPC sends) → one entry only.

## 3. Extract each email

Read full content with `mcp__Microsoft_365__read_resource` on the email URI when the
search summary is not enough (always read: David's weekly updates, Peter Gao briefs,
and Okachi reports). If a read is too large and gets saved to a file, slice it with
python (json.load, strip HTML tags) rather than re-reading blindly.

**Okachi Morning Rubber Report (bon@okachi.jp): always read the PDF attachment.**
Read the message resource first to get `attachments[].uri`, then call
`read_resource` on the attachment URI — it returns the PDF as plain text. Extract:
- SGX TSR20 nearby (first listed month) SETTLE → `sgx_tsr20` (US¢/kg)
- SGX RSS3 nearby SETTLE → `sgx_rss3` (US¢/kg)
- OSE RSS3 active-month (highest OI, usually JAN) SETTLE → `ose_rss3` (JPY/kg)
- SHFE SCRWF active (highest OI) SETTLE → `shfe_ru` (CNY/t)
- INE TSR20 active SETTLE → `ine_tsr20` (CNY/t)
- RSS3 FOB BANGKOK 3M → `rss3_fob_bkk` (US¢/kg); HATYAI USS spot → `uss_thb` (THB/kg)
- USDTHB / USDJPY / USDCNY; CME WTI settlement → `wti`
- The DAILY MARKET NEWS paragraph → the entry's `summary` (2–3 sentences) and macro
  themes (oil, hormuz, fx, china-demand, etc.)
- Metric dates = the report's TRADE DAY (not the email date). Use `d` overrides.

For every email produce one JSON entry matching the schema documented at the top of
`dashboard/data.js`:
- `id` = internetMessageId. `date` = received date (YYYY-MM-DD).
- `source`: own | team | broker | research | association | news (see sender map above;
  David's own sends = own).
- `sentiment`: score the author's market tone from −2 (very bearish) to +2 (very
  bullish), halves allowed; `null` for pure data/quotation emails with no view.
- `themes`: 2–6 kebab-case tags, reuse existing vocabulary from data.js where it fits
  (supply, china-demand, weather, oil, spreads, positioning, eudr, thb, …).
- `summary`: 1–3 sentences capturing the actionable content, including key numbers.
- `metrics`: every clearly-stated value that maps to a canonical key (list in
  data.js header). Do not invent keys casually; add a new canonical key only if a
  genuinely new recurring metric appears, and document it in the header comment.
- `link`: the webLink if available.

## 4. Write, validate, push

1. Append new entries to `emails[]` in `dashboard/data.js` (chronological order,
   skip any `id` already present). Update `lastUpdated` to now (UTC ISO).
2. Validate: `node --check dashboard/data.js` must pass.
3. Commit with message `Dashboard data: <YYYY-MM-DD> update (<n> new emails)` and push
   with `git push -u origin <current branch>` (retry with backoff on network errors).

Do not modify `dashboard/index.html` unless the user asked for dashboard changes.
Report back: how many emails were added, per source, and any notable market signal.
