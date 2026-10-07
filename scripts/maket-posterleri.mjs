// Ana sayfa 3D maketinin statik poster karelerini (public/images/maket/sahne-0…5.webp) canlı render'dan üretir.
// Posterler mobilde, "Sade görünüm"de, hareket azaltma tercihinde ve WebGL hatasında kullanılır.
// Sahne (src/components/home/scene) değiştiğinde yeniden çalıştırın.
//
// Kullanım:
//   npm install --no-save playwright-core --legacy-peer-deps
//   npm run dev            (ayrı terminalde, http://localhost:3000)
//   node scripts/maket-posterleri.mjs [http://localhost:3000] [chrome.exe yolu]
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";
import sharp from "sharp";

const baseUrl = process.argv[2] ?? "http://localhost:3000";
const chrome =
  process.argv[3] ??
  "C:/Program Files/Google/Chrome/Application/chrome.exe";
const outDir = path.join(process.cwd(), "public", "images", "maket");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: chrome,
  headless: true,
  args: ["--ignore-gpu-blocklist"],
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1.5,
});
await context.addInitScript(() => {
  try {
    localStorage.setItem("leyonex-cookie-consent", "denied");
  } catch {}
});
// Üretim sırasında analitik istekleri gönderilmez.
await context.route(
  /google-analytics|googletagmanager|clarity\.ms|licdn|linkedin|translate\.google|gstatic/,
  (route) => route.abort()
);

const page = await context.newPage();
await page.goto(`${baseUrl}/?kalite=tam`, {
  waitUntil: "networkidle",
  timeout: 180000,
});
await page.waitForTimeout(3000);

// Şeffaf arka plan; metin, menü ve sabit öğeler gizlenir.
await page.addStyleTag({
  content: `
    html, body, [data-stage-bg] { background: transparent !important; }
    .scene-region { -webkit-mask-image: none !important; mask-image: none !important; }
    [data-capture-hide], [data-stage-bg] > * { visibility: hidden !important; }
  `,
});
await page.evaluate(() => {
  for (const el of document.querySelectorAll("body *")) {
    if (getComputedStyle(el).position === "fixed") el.style.visibility = "hidden";
  }
  for (const el of document.querySelectorAll("nextjs-portal")) el.style.display = "none";
});

const ids = [
  null,
  "surec-hedef",
  "surec-tasarim",
  "surec-hizmetler",
  "surec-saha",
  "surec-degerlendirme",
];
for (const [i, id] of ids.entries()) {
  await page.evaluate((id) => {
    const y = id
      ? document.getElementById(id).getBoundingClientRect().top + window.scrollY
      : 0;
    window.scrollTo(0, y);
  }, id);
  await page.waitForTimeout(3500);
  const png = await page
    .locator("[data-scene-layer] canvas")
    .screenshot({ omitBackground: true });
  const target = path.join(outDir, `sahne-${i}.webp`);
  const info = await sharp(png)
    .webp({ quality: 80, alphaQuality: 90, effort: 6 })
    .toFile(target);
  console.log(
    `sahne-${i}.webp ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`
  );
}

await browser.close();
