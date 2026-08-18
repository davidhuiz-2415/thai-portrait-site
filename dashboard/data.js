/* =============================================================================
   MARKET ANALYSIS EMAIL DASHBOARD — DATA FILE
   =============================================================================
   This file is APPENDED TO DAILY by the `/update-dashboard` Claude command
   (see .claude/commands/update-dashboard.md). Keep it valid JavaScript.

   SCHEMA — window.MARKET_DATA:
     lastUpdated : ISO timestamp of the last extraction run
     emails[]    : one entry per market-analysis email
       id         : internetMessageId (dedupe key) or a stable synthetic id
       date       : "YYYY-MM-DD" (received date, local)
       subject    : original subject
       fromName   : display name of sender
       source     : "own" | "team" | "broker" | "research" | "association" | "news"
       categories : subset of ["prices","fundamentals","macro","positioning","flows"]
       sentiment  : -2 (very bearish) .. +2 (very bullish), null if N/A
       themes     : short kebab-case tags, e.g. "supply","china-demand","weather"
       summary    : 1–3 sentence plain-text digest
       metrics[]  : {k, v, u, d?} — canonical metric key, numeric value, unit,
                    optional date override (else email date). CANONICAL KEYS:
                      sgx_tsr20      SGX/SICOM TSR20 nearby settle   US¢/kg
                      sgx_rss3       SGX RSS3 nearby settle          US¢/kg
                      rss3_fob_bkk   RSS3 FOB Bangkok 3M             US¢/kg
                      ose_rss3       OSE (TOCOM) RSS3 active         JPY/kg
                      shfe_ru        SHFE RU active settle           CNY/t
                      ine_tsr20      INE TSR20 active settle         CNY/t
                      uss_thb        USS central mkt (Songkhla/Hatyai) THB/kg
                      rss3_thb       RSS3 central market             THB/kg
                      cup_lump       Cup lump avg                    THB/kg
                      latex          Field-latex buying avg          THB/kg
                      tocom_sicom_spread  TOCOM vs SICOM spread      USD/t
                      usdthb, usdjpy, usdcny                          fx
                      wti            WTI nearby settle               USD/bbl
       link       : Outlook webLink (optional)
   ========================================================================== */
window.MARKET_DATA = {
  "lastUpdated": "2026-08-18T01:30:00Z",
  "emails": [

    /* ------------------------- SEED HISTORY (Feb–Jul 2026) ---------------- */
    { "id": "seed-own-2026-02-06", "date": "2026-02-06",
      "subject": "Weekly Update as of 7th Feb 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["fundamentals","prices"], "sentiment": 0,
      "themes": ["wintering","supply","thailand"],
      "summary": "Northern and north-eastern Thailand entered wintering with minimal raw material; southern Thailand still tapping with no volume shortage.",
      "metrics": [] },

    { "id": "seed-own-2026-02-16", "date": "2026-02-16",
      "subject": "Weekly Update as of 16th Feb 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["fundamentals","prices"], "sentiment": 0.5,
      "themes": ["china-demand","auction-squeeze","supply"],
      "summary": "Market fluctuated ahead of Chinese New Year; producers quiet while some players intentionally pushed raw-material auction prices up daily, squeezing the market.",
      "metrics": [] },

    { "id": "seed-own-2026-02-27", "date": "2026-02-27",
      "subject": "Weekly Update as of 27th Feb 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["fundamentals","prices"], "sentiment": 1.5,
      "themes": ["china-demand","wintering","supply"],
      "summary": "Market hyped after China resumed from holidays — SICOM TSR20 touched 200 US¢/kg again. RSS supply very limited due to wintering; daily auction volumes thin.",
      "metrics": [ {"k":"sgx_tsr20","v":200,"u":"US¢/kg"} ] },

    { "id": "seed-own-2026-03-15", "date": "2026-03-15",
      "subject": "Weekly Update as of 15th Mar 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["macro","fundamentals"], "sentiment": 0.5,
      "themes": ["oil","synthetic-rubber","macro"],
      "summary": "Macro-driven fluctuation: synthetic rubber tracking oil and pulling natural rubber along. If SBR stays elevated, more substitution into NR is expected.",
      "metrics": [] },

    { "id": "seed-own-2026-03-22", "date": "2026-03-22",
      "subject": "Weekly Update as of 22nd Mar 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["macro","fundamentals"], "sentiment": 0.5,
      "themes": ["geopolitics","energy","logistics"],
      "summary": "Iran war impact spreading — diesel shortage across Thailand and SE Asia, trucks queuing for hours, logistics disturbed and factories affected.",
      "metrics": [] },

    { "id": "seed-own-2026-03-29", "date": "2026-03-29",
      "subject": "Weekly Update as of 29th Mar 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["macro","fundamentals"], "sentiment": 0.5,
      "themes": ["energy","logistics","inflation"],
      "summary": "Thailand's energy shortage worsened; gasoline and diesel prices jumped significantly, disrupting provincial transportation and raw-material logistics.",
      "metrics": [] },

    { "id": "seed-own-2026-04-05", "date": "2026-04-05",
      "subject": "Weekly Update as of 5th Apr 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["fundamentals","macro"], "sentiment": 1.5,
      "themes": ["energy","inflation","raw-material-rally"],
      "summary": "Energy crisis still critical, feeding broad inflation. Raw material shooting higher every day — extreme levels compared with the futures curve.",
      "metrics": [] },

    { "id": "seed-own-2026-04-26", "date": "2026-04-26",
      "subject": "Weekly Update as of 26th Apr 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["fundamentals"], "sentiment": 1,
      "themes": ["supply","weather","post-songkran"],
      "summary": "After Songkran, raw material still hanging at high levels with limited volume; rains starting across the country are boosting supply and farmers are keen to sell at high prices.",
      "metrics": [] },

    { "id": "seed-own-2026-05-10", "date": "2026-05-10",
      "subject": "Weekly Update as of 10th May 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["fundamentals","prices"], "sentiment": 2,
      "themes": ["weather","supply","rally"],
      "summary": "Strong bullish momentum across all categories. Heavy rainfall in southern Thailand drove significant supply constraints.",
      "metrics": [] },

    { "id": "seed-own-2026-05-17", "date": "2026-05-17",
      "subject": "Weekly Update as of 17th May 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["prices"], "sentiment": 0,
      "themes": ["prices","uss"],
      "summary": "USS factory quotes 80.5–85.5 THB/kg (16 May, most down 0.50–1.00); mid-week high around 83–87 THB/kg.",
      "metrics": [ {"k":"uss_thb","v":83.0,"u":"THB/kg","d":"2026-05-16"} ] },

    { "id": "seed-own-2026-05-24", "date": "2026-05-24",
      "subject": "Weekly Update as of 24th May 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["positioning","fundamentals"], "sentiment": 0.5,
      "themes": ["spreads","tapping-season"],
      "summary": "TOCOM–SICOM and RU–SICOM spreads continued to narrow; expecting further narrowing as tapping season starts. Suppliers hesitant to offer while local raw material stays pricey.",
      "metrics": [] },

    { "id": "seed-own-2026-05-31", "date": "2026-05-31",
      "subject": "Weekly Update as of 31st May 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["positioning"], "sentiment": 1,
      "themes": ["spreads","short-squeeze","positioning"],
      "summary": "SHFE vs INE/SICOM spread narrowed, especially nearby, on scarce deliverable stock and big funds running a short squeeze.",
      "metrics": [] },

    { "id": "seed-own-2026-06-08", "date": "2026-06-08",
      "subject": "Weekly Update as of 8th June 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["positioning"], "sentiment": 0,
      "themes": ["spreads","positioning"],
      "summary": "Unwound RU vs INE by 1,000 mt at ~350 USD spread, 1,000 mt left in book. TOCOM–SICOM still wide above 400 USD; physical market quiet.",
      "metrics": [ {"k":"tocom_sicom_spread","v":400,"u":"USD/t"} ] },

    { "id": "seed-own-2026-06-14", "date": "2026-06-14",
      "subject": "Weekly Update as of 14th June 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["positioning","fundamentals"], "sentiment": 0.5,
      "themes": ["weather","spreads","positioning"],
      "summary": "Closed all TOCOM short positions at ~420 USD spread — abnormal Thai weather and sky-high raw material argued for stepping aside.",
      "metrics": [ {"k":"tocom_sicom_spread","v":420,"u":"USD/t"} ] },

    { "id": "seed-own-2026-06-21", "date": "2026-06-21",
      "subject": "Weekly Update as of 22nd June 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["positioning","prices"], "sentiment": 0,
      "themes": ["spreads","rss"],
      "summary": "TOCOM vs SICOM widened to almost 500 USD. RSS producers offering 3,000+ USD/t while TOCOM FOB sits near 2,700 — big room for the spread to finally narrow.",
      "metrics": [ {"k":"tocom_sicom_spread","v":500,"u":"USD/t"} ] },

    { "id": "seed-own-2026-06-28", "date": "2026-06-28",
      "subject": "Weekly Update as of 28th June 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["prices","fundamentals"], "sentiment": -2,
      "themes": ["selloff","futures"],
      "summary": "Big move down: SICOM TSR slid from 230+ to the 208 level in just three days; raw material dropped significantly following futures.",
      "metrics": [ {"k":"sgx_tsr20","v":230,"u":"US¢/kg","d":"2026-06-24"},
                   {"k":"sgx_tsr20","v":208,"u":"US¢/kg","d":"2026-06-27"} ] },

    { "id": "seed-own-2026-07-06", "date": "2026-07-06",
      "subject": "Weekly Update as of 6th July 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["prices"], "sentiment": 0,
      "themes": ["stabilization","spreads"],
      "summary": "Market stabilizing after the big fall; physical RSS vs TOCOM-convert range narrowed. No big spread movement otherwise.",
      "metrics": [] },

    { "id": "seed-own-2026-07-12", "date": "2026-07-12",
      "subject": "Weekly Update as of 12th July 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["fundamentals","prices"], "sentiment": 1,
      "themes": ["supply","raw-material-rally","factories"],
      "summary": "Futures fluctuated but Thai raw material kept rallying with visible tightness; factories getting uneasy, several producers calling to check offers. USS 73–76 THB/kg (6 Jul), 75.8–77.5 (7 Jul).",
      "metrics": [ {"k":"uss_thb","v":74.5,"u":"THB/kg","d":"2026-07-06"},
                   {"k":"uss_thb","v":76.6,"u":"THB/kg","d":"2026-07-07"} ] },

    { "id": "seed-own-2026-07-19", "date": "2026-07-19",
      "subject": "Weekly Update as of 19th July 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["fundamentals"], "sentiment": 1.5,
      "themes": ["supply","shortage","raw-material-rally"],
      "summary": "Market rebounding as Thai raw material keeps rising — multi-year highs. Shortage at processing factories continues; traders running field surveys.",
      "metrics": [] },

    { "id": "seed-news-2026-07-31", "date": "2026-07-31",
      "subject": "Rubber News Media Report — 22–28 July 2026", "fromName": "Olam Big Data Mailer",
      "source": "news", "categories": ["fundamentals"], "sentiment": null,
      "themes": ["news-digest"],
      "summary": "Weekly rubber news media digest covering industry headlines for 22–28 July.",
      "metrics": [] },

    /* ------------------------------ August 2026 --------------------------- */
    { "id": "seed-team-2026-08-03", "date": "2026-08-03",
      "subject": "Weekly Market and Business Brief of China Rubber Team (Jul 27–31)", "fromName": "Peter Gao",
      "source": "team", "categories": ["fundamentals","flows"], "sentiment": 0,
      "themes": ["china-demand","basis"],
      "summary": "China Rubber Team weekly: summary of natural-rubber transactions (BASIS book by variety/origin) and China market conditions for 27–31 July.",
      "metrics": [] },

    { "id": "seed-assoc-2026-08-04", "date": "2026-08-04",
      "subject": "ANRPC Natural Rubber Statistical Report & Tables for June 2026", "fromName": "ANRPC / RTAS",
      "source": "association", "categories": ["fundamentals","macro"], "sentiment": null,
      "themes": ["statistics","supply","crude-oil","thb"],
      "summary": "ANRPC monthly statistical report for June: production/consumption tables, crude-oil market trends, and Thai-baht strength among watch items.",
      "metrics": [] },

    { "id": "seed-research-2026-08-04", "date": "2026-08-04",
      "subject": "Horizon Insights — Rubber PPT Deck", "fromName": "Horizon Insights",
      "source": "research", "categories": ["positioning","fundamentals"], "sentiment": -1,
      "themes": ["positioning","open-interest","china-demand"],
      "summary": "China research deck: willingness to hold rubber positioning consistently low; month-on-month decline in open interest, partly contract-roll related.",
      "metrics": [] },

    { "id": "seed-own-2026-08-08", "date": "2026-08-08",
      "subject": "Weekly Update as of 8th Aug 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["fundamentals","prices"], "sentiment": 1,
      "themes": ["supply","africa-exports","raw-material-support"],
      "summary": "Rubber fluctuating around 21x. Thai raw-material cost support intact, producers holding minimal volume, and weak export data from Africa — market showing strong signs.",
      "metrics": [ {"k":"sgx_tsr20","v":215,"u":"US¢/kg"} ] },

    { "id": "seed-own-brief-2026-08-08", "date": "2026-08-08",
      "subject": "Rubber Market Weekly Brief (1–8 Aug) — Thailand raw material", "fromName": "David Zhao",
      "source": "own", "categories": ["prices","fundamentals"], "sentiment": -1,
      "themes": ["uss","weather","eudr","thb"],
      "summary": "Physical market under pressure: Songkhla USS fell THB 5.43/kg in one day (6 Aug). USS auction avg 82–85, RSS3 84.5–85.7, cup lump ~63.8, latex ~72.5 THB/kg. EUDR premium THB 4–6/kg; THB ~33.07/USD capping export upside. Heavy rain (250mm/24h warnings) disrupting tapping.",
      "metrics": [ {"k":"uss_thb","v":82.09,"u":"THB/kg","d":"2026-08-06"},
                   {"k":"rss3_thb","v":85.71,"u":"THB/kg","d":"2026-08-03"},
                   {"k":"rss3_thb","v":84.50,"u":"THB/kg","d":"2026-08-07"},
                   {"k":"cup_lump","v":63.80,"u":"THB/kg","d":"2026-08-08"},
                   {"k":"latex","v":72.50,"u":"THB/kg","d":"2026-08-08"},
                   {"k":"usdthb","v":33.07,"u":"THB","d":"2026-08-08"} ] },

    { "id": "seed-team-2026-08-10", "date": "2026-08-10",
      "subject": "Weekly Market and Business Brief of China Rubber Team (3–7 Aug)", "fromName": "Peter Gao",
      "source": "team", "categories": ["fundamentals","flows"], "sentiment": 0,
      "themes": ["china-demand","basis"],
      "summary": "China Rubber Team weekly: BASIS-book transaction summary by rubber variety and origin; China demand-side color for 3–7 August.",
      "metrics": [] },

    { "id": "seed-research-2026-08-12", "date": "2026-08-12",
      "subject": "(Observatory) Australia: US Loan to Sunrise makes Pax Silica Potential a Reality", "fromName": "Observatory Group",
      "source": "research", "categories": ["macro"], "sentiment": null,
      "themes": ["geopolitics","macro"],
      "summary": "Macro/geopolitics note on US–Australia strategic investment (Pax Silica), part of the broader geopolitical backdrop.",
      "metrics": [] },

    { "id": "seed-broker-2026-08-13", "date": "2026-08-13",
      "subject": "DBS — Macro Strategy: Malaysia watch; IDR/INR/SGD rates review; ECB review", "fromName": "DBS (Terence T.)",
      "source": "broker", "categories": ["macro"], "sentiment": null,
      "themes": ["rates","fx","asean","ecb"],
      "summary": "DBS macro strategy: Malaysia watch, IDR/INR/SGD rates review and ECB review — regional rates and FX backdrop for commodity currencies.",
      "metrics": [] },

    { "id": "<SEYPR03MB92305923E22BEBED69E02F7DEBA72@SEYPR03MB9230.apcprd03.prod.outlook.com>",
      "date": "2026-08-17",
      "subject": "Weekly Update as of 17th Aug 2026", "fromName": "David Zhao",
      "source": "own", "categories": ["prices","fundamentals","positioning","macro"], "sentiment": -1,
      "themes": ["spreads","backwardation","supply","china-demand","oil","weather"],
      "summary": "RSS offers 274–290 US¢ vs TOCOM FOB ~260 — spread narrowed a lot; traders eyeing RSS imports to Japan. Strong TOCOM backwardation hurting shorts rolling forward. Week traded soft: SICOM TSR20 Sep peaked 222.2 (12 Aug) then settled 219.8 Friday; OSE Jan ¥420.5, SHFE Jan 17,790. Malaysia June output +31.5% m/m, China July car sales -21.1% y/y (10th straight decline), Songkhla USS -3.2 to 79.2. RAOT warns more downside. Tone bearish-to-cautious; flat book, waiting for new entry.",
      "metrics": [ {"k":"sgx_tsr20","v":222.2,"u":"US¢/kg","d":"2026-08-12"},
                   {"k":"sgx_tsr20","v":219.8,"u":"US¢/kg","d":"2026-08-14"},
                   {"k":"ose_rss3","v":420.5,"u":"JPY/kg","d":"2026-08-14"},
                   {"k":"shfe_ru","v":17790,"u":"CNY/t","d":"2026-08-14"},
                   {"k":"uss_thb","v":82.40,"u":"THB/kg","d":"2026-08-10"},
                   {"k":"uss_thb","v":79.20,"u":"THB/kg","d":"2026-08-14"},
                   {"k":"rss3_thb","v":84.00,"u":"THB/kg","d":"2026-08-14"},
                   {"k":"cup_lump","v":65.20,"u":"THB/kg","d":"2026-08-15"},
                   {"k":"latex","v":72.63,"u":"THB/kg","d":"2026-08-14"} ] },

    { "id": "<TYSPR03MB8083BEC86B893D9A7D4A3DCC96A72@TYSPR03MB8083.apcprd03.prod.outlook.com>",
      "date": "2026-08-17",
      "subject": "Weekly Market and Business Brief of China Rubber Team (10–14 Aug)", "fromName": "Peter Gao",
      "source": "team", "categories": ["fundamentals","flows"], "sentiment": 0,
      "themes": ["china-demand","basis"],
      "summary": "China Rubber Team weekly: BASIS-book natural rubber transaction summary by variety/origin for 10–14 August, plus China market and business color.",
      "metrics": [] },

    { "id": "<TY1PPF09DC48EE181F90FDB20CD37DF0BC5FEA72@TY1PPF09DC48EE1.apcprd04.prod.outlook.com>",
      "date": "2026-08-17",
      "subject": "SGX Rubber Settlement Prices & News 17/08/2026", "fromName": "Phillip Nova",
      "source": "broker", "categories": ["prices"], "sentiment": null,
      "themes": ["sgx","settlements"],
      "summary": "Daily SGX rubber settlement prices and market news for 17 August.",
      "metrics": [] },

    { "id": "seed-assoc-2026-08-17", "date": "2026-08-17",
      "subject": "RTAS Daily Market Quotations / Daily NR Prices of ARBC Members", "fromName": "Rubber Trade Association of Singapore",
      "source": "association", "categories": ["prices"], "sentiment": null,
      "themes": ["quotations","physical"],
      "summary": "Daily official NR market quotations from RTAS and ARBC member prices for 17 August.",
      "metrics": [] },

    { "id": "<01f101dd2ea7$8adc4350$a094c9f0$@okachi.jp>",
      "date": "2026-08-18",
      "subject": "Morning Rubber Report (18 Aug, 2026) — Okachi", "fromName": "Okachi & Co.",
      "source": "broker", "categories": ["prices","macro"], "sentiment": 0.5,
      "themes": ["ose","sgx","shfe","oil","hormuz","fx","china-demand"],
      "summary": "Trade day 17/8: OSE RSS3 Jan settled ¥428.3 (+7.8); SGX TSR20 Sep 223.7 (+3.9), RSS3 Sep 276.0; SHFE Jan settle 17,970; INE Oct 14,940; RSS3 FOB BKK 285.8 US¢; Hatyai USS 81.30 THB. WTI +2.6% to 84.50 / Brent 90.87 as US–Iran MOU expired and Hormuz risk returned; USD index at 99.5 lows; USDJPY 159.2. Butadiene rallied 4%+ cost-side; China July rubber imports 580kt (-8.5% y/y). Crude bid not yet transmitted to NR.",
      "metrics": [ {"k":"sgx_tsr20","v":223.7,"u":"US¢/kg","d":"2026-08-17"},
                   {"k":"sgx_rss3","v":276.0,"u":"US¢/kg","d":"2026-08-17"},
                   {"k":"ose_rss3","v":428.3,"u":"JPY/kg","d":"2026-08-17"},
                   {"k":"shfe_ru","v":17970,"u":"CNY/t","d":"2026-08-17"},
                   {"k":"ine_tsr20","v":14940,"u":"CNY/t","d":"2026-08-17"},
                   {"k":"rss3_fob_bkk","v":285.8,"u":"US¢/kg","d":"2026-08-17"},
                   {"k":"uss_thb","v":81.30,"u":"THB/kg","d":"2026-08-18"},
                   {"k":"usdthb","v":33.02,"u":"THB","d":"2026-08-18"},
                   {"k":"usdjpy","v":159.16,"u":"JPY","d":"2026-08-18"},
                   {"k":"wti","v":84.50,"u":"USD/bbl","d":"2026-08-17"} ] }
  ]
};
