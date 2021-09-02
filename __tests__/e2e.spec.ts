/**
 * @jest-environment puppeteer
 */
const path = require("path");
jest.setTimeout(60000);
describe("Homepage loads", () => {
  it("works", async () => {
    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
    );
    await page.goto("http://localhost:4444/");
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
