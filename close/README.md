# Fabriq Bookkeeping

A separate marketing site for an AI-native bookkeeping firm. It lives in this folder so it does not mix with the Fabriq Data consultancy homepage at the repo root.

Preview from the repo root:

```bash
python3 -m http.server 8765
```

Open http://127.0.0.1:8765/close/

## Who it is for

The buyer of the main site is the business owner. Bookkeeping and accounting firms are a Solutions item, not a hidden URL. The homepage itself stays written to the owner.

Full service is the hero. The product is not self-serve. It is beta, worked 1:1. The path where the customer’s own team runs the platform stays off the homepage. There is no published price. Conceptually there are two ways to work, but the start form is full-service only.

Accounts payable is in scope as bookkeeping work: bills captured, coded, and matched to payments. It is not Bill.com sync, payment runs, or 1099s.

## Voice

Short commercial cadence, in the manner of Webgility. Limits are stated the way `accounts.html` states them: named ledgers, a person signs, and a line between what is live and what is later.

Do not use “autopilot,” “Start free,” “intelligence layer,” or “Agentic FinOps.” Do not invent social proof. Do not take voice or prices from `books.html`. That page is an older consumer draft.

Headline, kept:

> Every bill coded.  
> Every account reconciled.  
> Every month closed.

The sentence “We keep the books for companies that already run on QuickBooks, Xero, or Zoho. You stay in the business. We stay in the books.” is not on the hero. Close my books lives in the nav and at the bottom of the page.

## Inspirations

Two public sites were the references. Neither was copied. Pricing, scope, and claims stay ours.

### Webgility

- https://www.webgility.com/
- https://www.webgility.com/pricing

Taken: the short commercial cadence, a homepage that is a hero plus a crisp multi-card feature grid, and floating highlight cards sitting on top of a product picture (their cards include a payout, “P&L report ready,” and a QuickBooks connection). Their hero picture is a static image, which is why this site does not ship a live HTML frame as the finished hero.

Not taken: the Core Platform / Full Service price toggle, or any of the published prices (platform tiers and full service from $649). Their full service includes payroll, sales tax, and 1099s. Ours does not. Both of our ways of working end in a conversation, so a price toggle does not belong on the page. “Start free” and similar self-serve language do not belong either.

### Rillet

- https://www.rillet.com/

Taken: a product picture that reads as the close in progress. Inside that picture: a chat field, current-period metrics, lines that need a person, and pinned reports. Their hero is a silent looping video. The still has to be on screen before that file arrives. Webflow paints frame 0 (`home hero video compressed_poster.0000000.jpg`) as a CSS `background-image` on the `<video>`, then plays an MP4 and a WebM (`home hero video compressed_mp4.mp4`, `home hero video compressed_webm.webm`). This site meets that requirement with `poster="media/hero-poster.jpg"` on the video, then `media/hero.mp4`. The poster is frame 0 of the same clip.

Not taken: their arrangement of headline on the left and lede plus button on the right. This hero is the headline alone. Close my books stays in the nav and at the bottom of the page. Their metrics (cash, ARR, runway) and their headline are not used. The picture here is a business’s open month — cash, revenue, expenses, net income, receivable, payable — not a SaaS scoreboard.

## What is live, and what the picture may still show

Live, per `accounts.html`: QuickBooks, Xero, Zoho; PDF and image extraction; categorization and reconciliation with a review inbox; workbench agents; multi-entity, FX, and an HQ view; approved write-back.

Available on this site: QuickBooks, Zoho Books, Xero, bank accounts through Plaid, Bill.com, and Salesforce. Treat Bill.com and Salesforce as available even where `accounts.html` still lists them as roadmap.

Later: Sage, and full intercompany elimination.

The homepage picture shows QuickBooks, Salesforce, and Bill.com as recently synced. The times are illustrative. The Integrations menu names each system under the job it does.

## Visual system

Marketing chrome: paper `#f4f6f5`, pine button `#1b4f38`, Newsreader headlines, Atkinson Hyperlegible body.

The product frame uses the product UI, not the marketing type. Purple `#7028a0`, Lato, and Poppins come from the bookkeeping app in `/Users/prasannaj/dev/fabriq-books/fabriq-ws-setup` (`frontend-1`). The real dashboard was not copied. It was too dense. The frame is a cleaned period view: chat field, current-period metrics, approval lines, pinned reports, and three floating highlight cards.

Period numbers are a business’s current month (cash, revenue, expenses, net income, receivable, payable), dollarized from the app’s period snapshot. They are not task counts and not a fake ARR.

## Pages

| File | Status | Role |
| --- | --- | --- |
| `index.html` | Built | Home. Nav is Product, Solutions, Integrations, Login, and Close my books. Menu rows are not links yet. |
| `capture.html` | Source for the hero, not a public page | The live HTML product frame. Not linked from the nav. |
| `close.css` | Built | Shared styles. Product UI is scoped under the stage. |
| `media/hero.mp4` | Built | Silent looping hero, about 10 seconds, no audio. |
| `media/hero-poster.jpg` | Built | Frame 0. Shows before the video paints. |
| `how.html` | Not built | How the month closes. Not a top-level nav item. |
| `start.html` | Not built | “Close my books.” Full service only. |
| `firms.html` | Not built | Practice page, reached from Solutions. |

## Nav

Wordmark, then Product, Solutions, Integrations, Login, and the Close my books button. Footer stays the name and hello@fabriqdata.com.

Product opens the six homepage cards as a list, names only, not bold, and not links yet: AI categorization, Document capture, Agentic reconciliation, Accounts payable, Agentic close, Connectors.

Solutions lists Businesses, and Bookkeeping and accounting firms. Same treatment: names only, not links yet. Firms is in this menu, not a hidden URL. The homepage itself stays written to the business owner.

Integrations uses a bold heading and regular items, with no extra line under a name:

- Ledgers — QuickBooks, Zoho Books, Xero.
- Banks — Plaid.
- Accounts payable — Bill.com.
- Accounts receivable — Salesforce.

Sage stays off this menu until it is asked for. Login is a text link to https://books.fabriqdata.com in a new tab. Close my books stays the only filled button. Nothing else in the menus links anywhere until those pages exist.

The list has to stay open while the pointer moves from the label onto an item. The panel touches the label, so there is no gap for the pointer to fall through, and the list waits a moment before it closes. On a narrow screen the same lists sit behind Menu.

### How it works (`how.html`)

“You send the month. We close it. You sign off.” Three moves: connect, prepare, approve. A shorter product view, the same six cards, and a live-versus-later table. On this site the available connectors are QuickBooks, Zoho Books, Xero, banks through Plaid, Bill.com, and Salesforce. Sage and full intercompany are later.

### Start (`start.html`)

Fields: name, work email, company; ledger (QuickBooks, Xero, Zoho, or else); companies (1, 2–3, or more); how far behind; optional note on what is messy. The button writes to hello@fabriqdata.com until a form service exists. Copy: “We read it and write back. You will not get a login.”

### Firms (`firms.html`)

Same product, framed for a practice: staff and reviewer, a session on one mixed-software client. Linked from Solutions. The homepage stays written to the business owner.

### Left off the owner pages

Payroll, sales tax filing, 1099s, the tax return, prices, and self-serve signup.

## Homepage shape

Short hero, then the product picture, then a six-card grid, then one close. It is not a long vertical document.

1. Headline only. Close my books stays in the nav.
2. Product picture. The video, not a live HTML frame.
3. “How we close the month.” AI categorization, Document capture, Agentic reconciliation, Accounts payable, Agentic close, Connectors. Multi-entity is not its own card. Review is not its own card.
4. Close. “Bring the month that is open.”

## How the hero was made

Rillet’s hero is a silent looping video (MP4 and WebM) with a JPEG of frame 0 painted first, as a background on the video element. Webgility’s hero is a static product image with floating cards. Neither ships a live HTML mock as the finished picture. This site followed that: HTML while the content was still moving, then a recording once the frame settled.

Image models were not used. They smear UI text.

### The HTML that was recorded

`capture.html` is a copy of the homepage from before the swap. Its product stage is real HTML and CSS, plus a small typing script. That file is the source of the picture. `index.html` no longer contains the frame. It only plays the video.

What is inside the stage:

- Sync row: QuickBooks 12 min ago, Salesforce 26 min ago, Bill.com 1 hr ago.
- Ask field. The script rewrites `#ask-text`: add a character every 48ms, hold 1600ms, delete every 28ms. The caret is a CSS blink. `prefers-reduced-motion` leaves the first question. The lines are “What’s still open this month?”, “Which bills still need a match?”, “What’s our cash position?”, and “What needs my approval?”
- Chips: Unmatched lines, Open bills, What needs me.
- Period: “March, compared with February.”
- Metrics: Cash $556,400 / 3 accounts; Revenue $128,400, +8.4%; Expenses $91,200, −3.1%; Net income $37,200; Receivable $34,850 / 14 invoices; Payable $18,720 / 9 bills.
- Waiting for approval: AWS, Google Workspace, Chase 4521, Amex 1004 (needs a receipt), Northwind, City Power.
- Pinned reports: P&L, Balance sheet, Cash flow, AP aging.
- Floating cards in the lavender gutter: March revenue / expenses / net, Last sync, and “March P&L ready.”

### The recording

Playwright, using the system Chrome channel (Playwright’s own Chromium was not installed; `channel: 'chrome'` was required, and Playwright’s ffmpeg had to be installed before `recordVideo` would run). Viewport 1600×1100. The script hid the header, the headline row, the card section, the close section, the footer, and the skip link, and held the stage at 1440px wide for about 11 seconds so the typing was in the take.

The raw file was a 1600×1100 VP8 WebM. The lavender panel did not fill that viewport: page background sat on the sides, and a gray band sat under the stage. The shipped crop is the panel only, `1418×578` at `x=82, y=26` of that recording.

ffmpeg then wrote:

- `media/hero.mp4` — H.264, no audio, about 10 seconds, faststart.
- `media/hero-poster.jpg` — the first frame of that clip.

`index.html` plays it like this:

```html
<video class="hero-video" autoplay muted loop playsinline poster="media/hero-poster.jpg">
  <source src="media/hero.mp4" type="video/mp4">
</video>
```

The poster is the background requirement: it paints before `hero.mp4` has downloaded, the same job as Rillet’s frame-0 JPEG. Headline, cards, and the close stay HTML so they can change without a new recording. The product picture cannot.

The loop restarts mid-sentence. That is the screen recording, not a designed in-and-out. A later cut can land on a full question.

### Recording again

Change `capture.html`, serve the repo, record only the product stage, crop to the lavender panel, and replace `media/hero.mp4` and `media/hero-poster.jpg`. Do not put `capture.html` in the nav.
