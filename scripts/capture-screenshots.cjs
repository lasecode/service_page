// Screenshot capture script using Puppeteer
// Run AFTER: npm install puppeteer
// Command: node scripts/capture-screenshots.cjs

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/screenshots');
fs.mkdirSync(outputDir, { recursive: true });

const sites = [
  { id: 'salon',      url: 'https://lasecode.github.io/salon-landingpage/' },
  { id: 'realestate', url: 'https://lasecode.github.io/realestate-landingpage/' },
  { id: 'restaurant', url: 'https://lasecode.github.io/resturantlanding-page/' },
  { id: 'saas',       url: 'https://lasecode.github.io/saas-landingpage/' },
];

(async () => {
  console.log('Launching Chromium...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  for (const site of sites) {
    console.log(`\nCapturing: ${site.id}`);
    console.log(`  URL: ${site.url}`);
    const page = await browser.newPage();

    // Desktop viewport – 16:10 ratio looks good for cards
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1.5 });

    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 45000 });
      // Extra wait for web fonts + images to paint
      await new Promise(r => setTimeout(r, 2500));

      const outPath = path.join(outputDir, `${site.id}.png`);
      await page.screenshot({
        path: outPath,
        clip: { x: 0, y: 0, width: 1280, height: 800 },
      });
      console.log(`  ✓ Saved → ${outPath}`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\n✅ All done! Screenshots saved to public/screenshots/');
})();
