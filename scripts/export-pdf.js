/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "portfolio.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
})();