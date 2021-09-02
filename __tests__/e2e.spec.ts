/**
 * @jest-environment puppeteer
 */
const path = require("path");
describe("Homepage loads", () => {
  it("works", async () => {
    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
    );
    const messages = [`--user-data-dir=${process.cwd()}`];
    page
      .on("console", (message) =>
        messages.push(
          `${message.type().substr(0, 3).toUpperCase()} ${message.text()}`,
        ),
      )
      .on("pageerror", ({ message }) => messages.push(message))
      .on("response", (response) =>
        messages.push(`${response.status()} ${response.url()}`),
      )
      .on("requestfailed", (request) =>
        messages.push(`${request.failure().errorText} ${request.url()}`),
      );
    await page.goto("http://localhost:4444/");
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot({
      comparisonMethod: "ssim",
      failureThreshold: 0.01,
      failureThresholdType: "percent",
    });
  });
});
