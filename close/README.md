# Fabriq Bookkeeping

The marketing site for Fabriq Bookkeeping, an AI-native bookkeeping firm. It sells the service: we keep the books and close the month for a business. It does not sell a self-serve product.

This folder is separate from the Fabriq Data consultancy site at the repo root. Do not mix the two. Do not link this site from the consultancy homepage, and do not reuse that site’s Bootstrap template, `assets/css/style.css`, or its Space Grotesk type.

This README is the handoff for a redesign into a more professional theme. It records what the site has to say, what it must not say, how each part works, and why it is the way it is. The section [Redesign brief](#redesign-brief) lists what is free to change and what is not.

## Running it

Static HTML, CSS, and a little JavaScript. There is no build step and no framework.

From the repo root:

```bash
python3 -m http.server 8765
```

Then open http://127.0.0.1:8765/close/. If port 8765 is already in use, a server is probably already running. Use it rather than starting a second one.

Work happens on the `close-site` branch. History on that branch, oldest first:

- `e44808f` Add the Fabriq Bookkeeping site in its own folder.
- `2595592` Show each close step as a short card with a product screen.
- `b483d27` Add the how, firms, and Close my books pages.
- `f2880d8` Drop the how and firms pages and keep menu items as names.

The `close-theme` branch, cut from `5b731d5`, moves the site to the product app’s white and purple theme. See [Visual system](#visual-system).

## Files

| File | Public | What it is |
| --- | --- | --- |
| `index.html` | Yes | The homepage. |
| `start.html` | Yes | The Close my books form. |
| `close.css` | — | All styles for both pages. |
| `close.js` | — | Nav menus, the mobile menu, and the form. Loaded by both pages. |
| `media/hero.mp4` | — | The hero picture. Silent loop, 1418×578, H.264, about 10 seconds, about 400KB. |
| `media/hero-poster.jpg` | — | Frame 0 of `hero.mp4`. Paints before the video arrives. |
| `capture.html` | No | The live HTML product frame that `hero.mp4` was recorded from. Never linked. |
| `tools/record-hero.mjs` | No | The Playwright script that records `capture.html`. |

Two pages only. There is no How it works page, no firms page, and no page per menu item. That was tried and removed on purpose (`f2880d8`). Do not add them back unless asked.

The favicon is `../assets/images/fabriq_logo.png`, shared with the repo root.

## Who it is for

The buyer is the owner of a business that already runs on QuickBooks, Xero, or Zoho Books. Every line on the homepage is written to that person.

Bookkeeping and accounting firms are a second audience. They appear as an item under Solutions, and as a choice on the form. They do not get their own page, and the homepage is not rewritten for them.

What is being sold:

- Full service. We do the bookkeeping and close the month. A person approves before anything is written back to the ledger.
- It is in beta and worked 1:1 with each customer. It is not self-serve.
- There is no published price, and no plan or tier table.
- The path where a customer’s own team runs the platform exists, but it stays off this site.

Accounts payable is in scope as bookkeeping work: bills captured, coded, and matched to their payments. It is not a bill-pay product. There are no payment runs here, and no 1099s.

Never on these pages: payroll, sales tax filing, 1099s, the tax return, prices, free trials, or self-serve signup.

## What the product does

Use these facts. Do not add capabilities that are not on this list.

Connected and available on this site:

- Ledgers: QuickBooks, Zoho Books, Xero. The books stay in the customer’s ledger. Approved changes are written back to it.
- Banks: account feeds through Plaid.
- Accounts payable: Bill.com.
- Accounts receivable: Salesforce.

Treat Bill.com and Salesforce as available. The repo-root page `accounts.html` still lists them as roadmap. On this site they are available, by the owner’s decision.

Later, and not on this site as available: Sage, and full intercompany elimination.

The work itself, which is the six homepage cards:

1. AI categorization. Spending is coded to the chart of accounts as it lands. A bookkeeper checks what is not a clear match.
2. Document capture. Invoices, bills, and statements are read from the PDF or photo.
3. Agentic reconciliation. Each bank and card line is matched to the account and the document. A person approves the match.
4. Accounts payable. Bills are captured, coded, and matched to the payment. Open bills stay in the month until they clear.
5. Agentic close. An agent lays out the month. A bookkeeper reviews it. The customer approves what hits the books.
6. Connectors. The books stay in the ledger. Banks, bills, and invoices sit beside them. Only approved changes are written back.

The rule running through all six: nothing posts to the books until a person approves it. Keep that true in any rewrite.

The platform also does multi-entity, FX, and a group HQ view (per `accounts.html`). Those are real, but they are not their own homepage cards. Revenue recognition is not something this service does. Do not add a card for it.

## Voice

Short commercial sentences, in the cadence of Webgility’s homepage. Plain verbs. One idea per line. Talk about the customer’s month, not about the product’s architecture.

Limits are stated plainly, the way `accounts.html` states them: name the ledgers, say a person approves, and keep what is available apart from what is later.

Do not use:

- “Autopilot”
- “Start free,” “Get started free,” or any trial language
- “Intelligence layer”
- “Agentic FinOps”
- Invented logos, testimonials, customer counts, ratings, or “trusted by” rows
- Anything from `books.html` at the repo root. That is an older consumer draft with $0 and $29 pricing. Its voice and prices are wrong for this site.

The button is always “Close my books.” Keep that exact label everywhere it appears, including the form’s submit button.

## Copy, verbatim

This is every customer-facing string on the two pages. A redesign can restyle all of it. Rewording should be a deliberate choice, not a side effect of a template.

### Shared

- Wordmark: Fabriq Bookkeeping
- Nav: Product · Solutions · Integrations · Login · Close my books
- Footer: Fabriq Bookkeeping and hello@fabriqdata.com
- Skip link: Skip to content
- Page titles: “Fabriq Bookkeeping — Every month closed” on the homepage, “Close my books — Fabriq Bookkeeping” on the form

### Menus

Product:

- AI categorization
- Document capture
- Agentic reconciliation
- Accounts payable
- Agentic close
- Connectors

Solutions:

- Businesses
- Bookkeeping and accounting firms

Integrations, as headings with items under them:

- Ledgers: QuickBooks, Zoho Books, Xero
- Banks: Plaid
- Accounts payable: Bill.com
- Accounts receivable: Salesforce

### Homepage (`index.html`)

Hero headline, three lines:

> Every bill coded.
> Every account reconciled.
> Every month closed.

There is no lede and no button beside the headline. That was removed on purpose: Close my books is already in the nav. Do not put the old lede back (“We keep the books for companies that already run on QuickBooks, Xero, or Zoho. You stay in the business. We stay in the books.”) unless asked.

Under the headline: the hero video.

Cards section heading: How we close the month

| Card | Line | Screen inside the card |
| --- | --- | --- |
| AI categorization | Spending is coded as it lands. A bookkeeper checks what is not a clear match. | Amazon Web Services · Software · $1,240; Google Workspace · Software · $186 |
| Document capture | The bill is read from the PDF. The month does not start with retyping. | `northwind-supply.pdf` with Vendor Northwind Supply, Amount $2,150, Account Materials |
| Agentic reconciliation | The bank line is matched to the bill. A person approves the match. | Chase 4521 · Bill 1044 · $4,280; Amex 1004 · Needs a receipt · $640 |
| Accounts payable | Open bills stay in the month until the payment clears. | Northwind Supply · Materials · $2,150; City Power · Due Apr 25 · $418 |
| Agentic close | The month is laid out. You approve what hits the books. | Code Amazon Web Services · Approve; Match Chase 4521 · Approve; Amex 1004 receipt · Needs you; City Power bill · Approve |
| Connectors | The books stay in your ledger. Banks, bills, and invoices sit beside them. | QuickBooks, Zoho Books, Xero, Plaid, Bill.com, Salesforce, each with a green dot |

Closing section:

- Heading: Bring the month that is open.
- Line: Tell us where the books live and how far behind they are.
- Button: Close my books

The meta description still says “QuickBooks, Xero, or Zoho … you approve what posts.” It is fine to tighten it.

### Form (`start.html`)

- Heading: Close my books.
- Line: We read it and write back. You will not get a login.
- Note above the button: This opens an email to hello@fabriqdata.com. We read it and write back.
- Submit: Close my books

| Label | Field | Required | Options |
| --- | --- | --- | --- |
| Name | text, `autocomplete=name` | Yes | |
| Work email | email, `autocomplete=email` | Yes | |
| Company | text, `autocomplete=organization` | Yes | |
| This request is for | select | Yes | A business (default) · A bookkeeping or accounting firm |
| Where the books live | select | Yes | Choose one · QuickBooks · Xero · Zoho Books · Something else |
| How many companies | select | Yes | Choose one · 1 · 2–3 · More than 3 |
| How far behind | select | Yes | Choose one · This month is open · About a month · A few months · I’m not sure |
| What is messy (optional) | textarea | No | |

Errors appear under the field: “Add this.” for an empty text field, “Choose one.” for an empty select, “Use a work email we can reply to.” for an invalid email.

## How the pieces behave

### Nav and menus (`close.js`)

- Product, Solutions, and Integrations are buttons with `aria-expanded` and `aria-controls`. Each opens a panel. The items inside are plain names, not links.
- With a mouse, a panel opens on hover. The panel sits flush against its label, so the pointer can move from the label onto the items without the panel closing. When the pointer leaves, the panel waits 200ms before it closes. This was a reported bug and must not come back.
- Clicking a label opens it. Focusing a label with the keyboard opens it. Tabbing out closes it. Escape closes all panels. Clicking anywhere else closes them.
- Below 880px, the nav collapses behind a Menu button, which becomes Close when open. The panels then expand inline, one at a time, on tap.
- Inside a panel, headings are bold and items are regular weight. There is no description line under any item. Both were explicit requests.
- Login is a plain text link to https://books.fabriqdata.com, opened in a new tab with `rel="noopener noreferrer"`.
- Close my books is the only filled button in the nav. It goes to `start.html`.

### Form (`close.js`)

- The form uses `novalidate` and its own checks, so errors read in the site’s voice.
- On submit with missing fields, every empty required field gets its message and `aria-invalid="true"`, and focus moves to the first problem.
- With everything filled, it builds an email and opens `mailto:hello@fabriqdata.com` with the subject “Close my books.” The body lists every answer, one per line, with the optional note last.
- There is no form backend yet. When one exists, replace the mailto step and keep the fields, labels, errors, and the “We read it and write back” promise.

### Hero video

```html
<video class="hero-video" autoplay muted loop playsinline poster="media/hero-poster.jpg">
  <source src="media/hero.mp4" type="video/mp4">
</video>
```

`muted` and `playsinline` are required for autoplay on phones. The poster is required too: the still has to be on screen before the video has downloaded. The poster is frame 0 of the same clip, so there is no jump when playback starts.

### Accessibility already in place

- A skip link to `#main`.
- A visible purple focus outline on every control.
- Real labels on every field, `role="alert"` on error slots, and `aria-invalid` on fields with errors.
- Menu state exposed through `aria-expanded`. Panels use the `hidden` attribute.
- `prefers-reduced-motion` turns off smooth scrolling and the caret blink.

A redesign should keep all of this.

## Visual system

The marketing page now uses the product app’s white and purple. The page and the product pictures share one purple family. Every color, radius, and font below comes from the product repo at `/Users/prasannaj/dev/fabriq-books/fabriq-ws-setup`, in `frontend-1` (`tailwind.config.ts`, `src/index.css`), except where the table says otherwise. Change them in both places together. The paper and pine theme, Newsreader, and Atkinson Hyperlegible are gone.

### Tokens (`close.css` `:root`)

| Token | Value | Source in the app | Use |
| --- | --- | --- | --- |
| `--bg` | `#ffffff` | `--background` | Page, nav, cards, panels |
| `--ink` | `#020817` | `--foreground` | Text |
| `--muted` | `#64748b` | `--muted-foreground` | Card lines, lede, notes, footer. 4.76:1 on white. Use it on white only. |
| `--rule` | `#e2e8f0` | `--border` | Nav rule, card grid lines, panel borders |
| `--field` | `#7c8799` | Not in the app | Form field borders, darkened to 3.6:1 so the fields are visible |
| `--purple` | `#7028a0` | `primary` / `primary-600` | The Close my books button, links, focus ring, open menu labels. 8.4:1 against white either way round. |
| `--purple-700` | `#591e80` | `primary-700` | Button and link hover, Approve text |
| `--purple-900` | `#2b0c3f` | `primary-900` | Figures inside the product pictures |
| `--purple-50` | `#f5ebf9` | `primary-50` | Approve pills in the card screens |
| `--purple-100` | `#e8d4f2` | `primary-100` | Text selection |
| `--lavender` | `#f5effb` | `--accent` | Hero frame and card screen backgrounds |
| `--lavender-soft` | `#faf7fd` | `--sidebar-background` | The closing section. Keep `--muted` text off it (4.48:1). |
| `--lavender-rule` | `#e6deed` | `--sidebar-border` | Hero frame, closing section, and card screen window borders |
| `--brick` | `#8a3a32` | Not in the app | “Needs you,” “Needs a receipt,” and form errors |
| `--green` | `#1f8a4c` | Not in the app | Connected-system dots |

Radii follow the app’s `--radius: 0.5rem`: `--radius-sm` 4px for pills, `--radius-md` 6px for buttons and fields, `--radius-lg` 8px for menu panels and card screen windows, and `--radius-xl` 12px for the hero frame, the card grid, the closing section, and the form. Shadows are three soft steps (`--shadow-sm`, `--shadow-md`, `--shadow-lg`). There are no decorative gradients.

### Type

Poppins (500 and 600) for headings, the wordmark, and figures. Lato (400 and 700) for body text, nav, and buttons. Both are loaded from Google Fonts.

| Element | Font | Size |
| --- | --- | --- |
| Hero headline | Poppins 500, −0.035em | `clamp(1.625rem, 0.6rem + 4.5vw, 4.25rem)`. Each of the three lines fits on a 390px phone. |
| Section headings | Poppins 500, −0.03em | `clamp(1.75rem, 1.1rem + 1.8vw, 2.75rem)` |
| Form heading | Poppins 500 | `clamp(2.25rem, 1.4rem + 2.6vw, 3.25rem)` |
| Card names | Poppins 500 | 1.1875rem |
| Wordmark | Poppins 600 | 1.0625rem |
| Body | Lato 400 | 1.0625rem, line height 1.6 |
| Nav, menu items, buttons, card lines | Lato | 0.9375rem |
| Labels, notes, footer | Lato | 0.875rem |
| Card screen text | Lato | 0.78rem, smaller and denser so it reads as inside the app |

### Layout

- Content width is `min(75rem, 100% − 3rem)`, or 2.5rem of gutter below 640px.
- The nav is a 64px sticky bar with a full-width hairline under it. It holds the wordmark and the three menus on the left, and Login and Close my books on the right. Each menu box fills the bar’s height, and its panel hangs from the bar’s bottom edge with no gap. Below 880px the bar stops being sticky, and the nav opens as a full-width list.
- The hero has 6rem above the headline and 4rem between the headline and the frame. The video sits in a 12px-radius frame with a lavender border and a soft purple-tinted shadow. Below 640px the frame crops the video to 4:3 from the center top (`object-fit: cover`), so the product reads at about twice the size. The poster gets the same crop.
- The six cards are one grid joined by 1px rules, like a single sheet. Each card screen is a lavender band at the bottom of the card. Inside it, a white app window is cropped at the right and bottom edges like a screenshot.
- The closing section is a centered `--lavender-soft` panel. The footer sits under a hairline.
- The form page is one centered 36rem column: the heading, the line, then the form in a bordered card.

Breakpoints: 1100px, 960px (cards go to two columns), 880px (nav collapses), 760px (tighter section spacing), and 640px (cards go to one column, and the hero crop starts).

### Product UI inside the picture and the card screens

The hero video and the card screens show the product. They use the same purple family as the page, but they stay recognizably inside the app: smaller, denser UI type, and framed like screenshots, while the page around them stays calm and spacious.

- Purple for actions such as Approve
- Lato for screen text, Poppins for figures in the hero frame
- A lavender stage: `#f4eef8` in the recorded hero, and `--lavender` behind the card screens
- Brick for “Needs you” and “Needs a receipt”
- Green for a connected-system dot

The real product dashboard was deliberately not copied. The owner called it too messy. The pictures here are a cleaned-up period view.

The hero recording was not redone for this theme. It was already white and purple, so it was re-framed instead. The rules that `capture.html` uses to draw the product stage (`.product-stage`, `.app`, `.metrics`, and the rest) are kept as they were, at the bottom of `close.css`, so `tools/record-hero.mjs` still reproduces the same picture.

## The homepage shape

The owner rejected a long, vertical, document-style page. The homepage is four parts, in this order:

1. The headline alone.
2. The product picture: the hero video, full content width.
3. How we close the month: a 3×2 grid of six cards. Each card is a name, one short line, and a small product screen showing only that card’s work.
4. One closing section and the Close my books button.

Then the footer.

## References

Two public sites shaped the direction. Neither was copied. Prices, scope, and claims are ours.

### Rillet — https://www.rillet.com/

The main reference for finish and layout.

Taken:

- A hero that is a product picture showing the close in progress: a chat field, the current period’s numbers, the lines waiting on a person, and pinned reports.
- That picture as a silent looping video with a frame-0 still. Rillet’s Webflow site paints `home hero video compressed_poster.0000000.jpg` as a CSS background on the `<video>`, then plays `home hero video compressed_mp4.mp4` or `…_webm.webm`. This site does the same job with the `poster` attribute.
- Feature cards that are a name, a short line, and a product screen. The owner pointed at three of Rillet’s homepage cards in particular. “Perpetual general ledger” shows balances plus connected systems. “Advanced revenue recognition” shows a revenue waterfall and deferred revenue. “Close management” shows a checklist of close tasks with assignees and checks. The six cards here borrow that shape.
- A Product menu that lists the features by name. Rillet’s groups features under “Core features” and “Advanced features.” With six items, this site does not need groups.

Not taken:

- Rillet’s headline-left, lede-and-button-right hero. Here the headline stands alone.
- Their metrics (ARR, runway) and their headline. The numbers here are one business’s open month.
- Revenue recognition as a feature.
- Rillet’s Solutions menu groups by role, company size, and competitor. Here it is two plain items.

### Webgility — https://www.webgility.com/ and https://www.webgility.com/pricing

Taken:

- The short commercial cadence of the copy.
- A homepage that is a hero, then a crisp grid of feature cards.
- Small floating highlight cards over the product picture. Webgility’s show a payout, “P&L report ready,” and a QuickBooks connection. The hero recording has three: March revenue, expenses, and net; Last sync; and “March P&L ready.”
- A static or recorded product picture rather than a live mock.

Not taken:

- The Core Platform / Full Service price toggle, and every price on that page (platform tiers, and full service from $649). Both ways of working here end in a conversation.
- Their full-service scope, which includes payroll, sales tax, and 1099s. This service does not.
- “Start free” and other self-serve language.

### Inside the repo

- `../accounts.html` and `../assets/css/accounts.css`: the firm-facing product brief. It is the source for what is live, and for the plain way limits are stated. It is not this site’s voice.
- `../books.html`: the older consumer draft. Do not use it.
- `../index.html` and `../README.md`: the consultancy site. Separate. Do not touch.

## How the hero was made

Rillet and Webgility both ship the hero as a recorded or static picture, not as a live HTML mock. This site followed that: the frame was built in HTML while the numbers and lines were still changing, then recorded once it settled. Image-generation models were not used, because they blur UI text.

### The source: `capture.html`

`capture.html` is a copy of an earlier homepage that still contains the live product frame. Its header and lower sections are older than the current homepage. That does not matter, because the recorder hides everything except the product stage. Edit only the stage.

What is inside the stage:

- A sync row: QuickBooks 12 min ago, Salesforce 26 min ago, Bill.com 1 hr ago. The times are illustrative.
- An ask field where questions type themselves. A script rewrites `#ask-text`: one character every 48ms, a 1600ms hold, then deletion at 28ms a character. The questions are “What’s still open this month?”, “Which bills still need a match?”, “What’s our cash position?”, and “What needs my approval?” The caret is a CSS blink. Under reduced motion it stays on the first question.
- Chips: Unmatched lines, Open bills, What needs me.
- The period: March, compared with February.
- Six metrics: Cash $556,400 (3 bank accounts); Revenue $128,400 (+8.4% vs last month); Expenses $91,200 (−3.1% vs last month); Net income $37,200 (this month); Receivable $34,850 (14 open invoices); Payable $18,720 (9 open bills). These are a business’s current period, dollarized from the product’s own period snapshot. They are not task counts and not an ARR.
- Waiting for approval, dated Apr 19 to Apr 22: Amazon Web Services (Categorize, $1,240), Google Workspace (Categorize, $186), Chase 4521 matched to bill 1044 (Reconcile, $4,280), Amex 1004 with no receipt on file (Reconcile, $640, Needs you), Northwind Supply materials (Bill, $2,150), City Power due Apr 25 (Bill, $418).
- Pinned reports: Profit and loss, Balance sheet, Cash flow, AP aging.
- Three floating cards in the lavender margin: March revenue, expenses, and net; Last sync; and March P&L ready.

The homepage card screens reuse these same vendors and amounts, so the picture and the cards describe the same month. Keep them consistent if either changes.

### Recording

`tools/record-hero.mjs` opens `capture.html` in headless system Chrome through Playwright, at a 1600×1100 viewport. It hides everything but the product stage, holds the stage at 1440px wide, records for about 11 seconds, and prints the path of the raw WebM.

```bash
cd /Users/prasannaj/dev/fabriqdata.com
python3 -m http.server 8765 &   # skip if it is already running
npx playwright install ffmpeg   # once; recordVideo fails without it
node close/tools/record-hero.mjs
```

Notes from the first take:

- Playwright’s bundled Chromium was not installed and could not be downloaded, so the script uses `channel: 'chrome'`, the installed Google Chrome.
- Playwright is loaded from the product repo’s `frontend-1/node_modules`. Set `PLAYWRIGHT_FROM` to another `package.json` path to use a different install.
- Recording does not work inside a restricted sandbox. Chrome aborts. Run it with normal permissions.

### Crop and encode

The raw clip is a 1600×1100 VP8 WebM. The lavender panel does not fill it: there is page background on both sides and a gray band underneath. The shipped crop is the panel alone, 1418×578 at x=82, y=26. If the stage size changes, measure again from a frame.

```bash
RAW=/tmp/hero-raw/<file>.webm
ffmpeg -y -ss 0.4 -t 10.2 -i "$RAW" -vf "crop=1418:578:82:26" -an \
  -c:v libx264 -pix_fmt yuv420p -crf 20 -movflags +faststart close/media/hero.mp4
ffmpeg -y -ss 0.4 -i "$RAW" -vf "crop=1418:578:82:26" -frames:v 1 -update 1 \
  close/media/hero-poster.jpg
```

Trimming 0.4 seconds from the start skips the blank first frames. `-an` drops audio. `+faststart` lets the video start before it has fully downloaded. The poster comes from the same moment as the clip’s first frame.

Known issues:

- The loop restarts mid-question. A better cut would begin and end on an empty ask field.
- There is MP4 only. Rillet also ships WebM. A WebM source would be a small win.
- On a phone, the 1418-wide picture was too small to read. Below 640px it is now cropped to 4:3 in CSS, which roughly doubles the text size and cuts off the edges of the Cash metric and the floating cards. A recorded phone-sized cut would still read better.

## Redesign brief

The owner wants a more professional theme, at Rillet’s level of finish. There is no Rillet theme to install. Rillet is a custom Webflow site. Webflow, Framer, and Tailwind template kits can be used for reference, but none of them should replace the content, the claims, or the structure below.

Free to change:

- Color, type, spacing, radius, borders, and shadows, including the paper and pine palette and the Newsreader and Atkinson pairing.
- The look of the nav, the menu panels, the cards, the closing section, the footer, and the form.
- The card screens’ styling, within the product look (see Visual system).
- Adding a logo mark next to the wordmark, if one is provided.
- Moving to a framework or build step, if there is a reason. The site is small enough that plain HTML and CSS still work.

Keep:

- Two pages: the homepage and `start.html`. No new pages for menu items.
- The homepage order: headline, product picture, six cards, one close.
- The headline and every claim in [What the product does](#what-the-product-does). Nothing that implies prices, trials, self-serve signup, payroll, tax, or 1099s.
- The nav items in that order, the menu contents, plain names in the menus, bold headings with regular items, and no description lines.
- Menus that stay open while the pointer moves onto them.
- Login opening books.fabriqdata.com in a new tab.
- The single filled button, Close my books, everywhere.
- The hero as a recorded, muted, looping video with a frame-0 poster. Not a live HTML mock and not a generated image.
- The form’s fields, the business-or-firm choice, the error messages, and the email handoff until a backend exists.
- The accessibility listed above.
- This site separate from the consultancy site at the repo root.

If the redesign changes the product stage’s look or size, re-record the hero with `tools/record-hero.mjs` rather than editing the video file.

## Open items

- A real form backend. The form currently opens an email.
- A better loop cut, a WebM source, and a phone-sized hero.
- The meta description could be tightened to match the current copy.
- There is no analytics. The consultancy site and `accounts.html` use PostHog. Whether this site should is undecided.
- Nothing has been pushed. The `close-site` branch was cut from a local `master` that is one commit ahead of `origin/master`.
