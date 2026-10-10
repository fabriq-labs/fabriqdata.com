// Records the product stage in capture.html as a silent clip for the homepage hero.
// Needs the preview server on 8765 and Playwright with its ffmpeg installed
// (`npx playwright install ffmpeg`). Playwright is resolved from PLAYWRIGHT_FROM,
// any package.json whose node_modules contains playwright.
import { createRequire } from 'module';

const from = process.env.PLAYWRIGHT_FROM
  || '/Users/prasannaj/dev/fabriq-books/fabriq-ws-setup/frontend-1/package.json';
const require = createRequire(from);
const { chromium } = require('playwright');

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const context = await browser.newContext({
  viewport: { width: 1600, height: 1100 },
  deviceScaleFactor: 1,
  recordVideo: { dir: '/tmp/hero-raw', size: { width: 1600, height: 1100 } },
});
const page = await context.newPage();
await page.goto('http://127.0.0.1:8765/close/capture.html', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: `
  header, .hero-row, .work, .start, footer, .skip { display: none !important; }
  body { background: #f4f6f5 !important; margin: 0; }
  main { margin: 0; }
  .hero { padding: 24px 0 0 !important; width: 1440px; margin: 0 auto !important; }
  .stage-wrap { margin-top: 0 !important; }
`});
await page.waitForTimeout(11000);
const video = page.video();
await context.close();
await browser.close();
console.log(await video.path());
