// Screenshot capture script using Puppeteer
// Run: node scripts/capture-screenshots.js
// Requires: npm install puppeteer (done separately)

import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '../public/screenshots');

mkdirSync(outputDir, { recursive: true });

const sites = [
  { id: 'salon',       url: 'https://lasecode.github.io/salon-landingpage/' },
  { id: 'realestate',  url: 'https://lasecode.github.io/realestate-landingpage/' },
  { id: 'restaurant',  url: 'https://lasecode.github.io/resturantlanding-page/' },
  { id: 'saas',        url: 'https://lasecode.github.io/saas-landingpage/' },
];

async function captureScreenshots() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const site of sites) {
    console.log(`Capturing: ${site.id} — ${site.url}`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait for fonts/images
      await new Promise(r => setTimeout(r, 2000));

      const outPath = join(outputDir, `${site.id}.png`);
      await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1280, height: 800 } });
      console.log(`  ✓ Saved: ${outPath}`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\nDone! Screenshots saved to public/screenshots/');
}

captureScreenshots().catch(console.error);
