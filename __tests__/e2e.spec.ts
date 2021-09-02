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

    expect(messages).toMatchInlineSnapshot(`
Array [
  "--user-data-dir=/Users/nigel/Documents/Projects/personal-website",
  "200 http://localhost:4444/",
  "200 http://localhost:4444/_next/static/css/31d6cfe0d16ae931b73c.css",
  "200 http://localhost:4444/_next/static/css/1d9f88c2652f0925fb44.css",
  "200 http://localhost:4444/_next/static/chunks/webpack-17b36bab618834005255.js",
  "200 http://localhost:4444/_next/static/chunks/framework-2191d16384373197bc0a.js",
  "200 http://localhost:4444/_next/static/chunks/main-2b3570ecc7354655654a.js",
  "200 http://localhost:4444/_next/static/chunks/pages/_app-cc2ad5f3d81ac14cb3a1.js",
  "200 http://localhost:4444/_next/static/chunks/659-0090406db486d1b51f23.js",
  "200 http://localhost:4444/_next/static/chunks/pages/index-9c61dced7d94b239fe07.js",
  "200 http://localhost:4444/_next/static/bQs8d56WdR8GTLSLGzSQh/_buildManifest.js",
  "200 http://localhost:4444/_next/static/bQs8d56WdR8GTLSLGzSQh/_ssgManifest.js",
  "404 http://localhost:4444/_next/static/css/_next/static/media/roboto-latin-300-normal.0109a2ace896a506a0aac5f7a94a8efb.woff2",
  "ERR Failed to load resource: the server responded with a status of 404 (Not Found)",
  "net::ERR_ABORTED http://localhost:4444/_next/static/css/_next/static/media/roboto-latin-300-normal.0109a2ace896a506a0aac5f7a94a8efb.woff2",
  "404 http://localhost:4444/_next/static/css/_next/static/media/roboto-latin-400-normal.4673b4537a84c7f7a130799aa6af329b.woff2",
  "ERR Failed to load resource: the server responded with a status of 404 (Not Found)",
  "net::ERR_ABORTED http://localhost:4444/_next/static/css/_next/static/media/roboto-latin-400-normal.4673b4537a84c7f7a130799aa6af329b.woff2",
  "404 http://localhost:4444/_next/static/css/_next/static/media/roboto-latin-700-normal.0682ca7f74351d42bf73ed1e95572bfe.woff2",
  "ERR Failed to load resource: the server responded with a status of 404 (Not Found)",
  "net::ERR_ABORTED http://localhost:4444/_next/static/css/_next/static/media/roboto-latin-700-normal.0682ca7f74351d42bf73ed1e95572bfe.woff2",
  "200 https://media.graphcms.com/resize=fit:crop,height:100,width:100/1bF1qLxsSbElgNK5x6t6",
  "404 http://localhost:4444/_next/static/css/_next/static/media/roboto-all-300-normal.8fc5f5f22c9951113696814563351c8c.woff",
  "ERR Failed to load resource: the server responded with a status of 404 (Not Found)",
  "net::ERR_ABORTED http://localhost:4444/_next/static/css/_next/static/media/roboto-all-300-normal.8fc5f5f22c9951113696814563351c8c.woff",
  "404 http://localhost:4444/_next/static/css/_next/static/media/roboto-all-400-normal.376ea5d93f71583052f65de4e0c6a92c.woff",
  "ERR Failed to load resource: the server responded with a status of 404 (Not Found)",
  "net::ERR_ABORTED http://localhost:4444/_next/static/css/_next/static/media/roboto-all-400-normal.376ea5d93f71583052f65de4e0c6a92c.woff",
  "404 http://localhost:4444/_next/static/css/_next/static/media/roboto-all-700-normal.ef6d1d09b20b877fee4ee89fde70755b.woff",
  "ERR Failed to load resource: the server responded with a status of 404 (Not Found)",
  "net::ERR_ABORTED http://localhost:4444/_next/static/css/_next/static/media/roboto-all-700-normal.ef6d1d09b20b877fee4ee89fde70755b.woff",
  "200 http://localhost:4444/_next/data/bQs8d56WdR8GTLSLGzSQh/index.json",
  "200 http://localhost:4444/_next/static/chunks/659-0090406db486d1b51f23.js",
  "200 http://localhost:4444/_next/data/bQs8d56WdR8GTLSLGzSQh/posts/avoid-generic-types.json",
  "200 http://localhost:4444/_next/data/bQs8d56WdR8GTLSLGzSQh/posts/how-to-csp.json",
  "200 http://localhost:4444/_next/static/chunks/pages/index-9c61dced7d94b239fe07.js",
  "200 http://localhost:4444/_next/static/chunks/668-b7e7bd028b1f1d460fda.js",
  "200 http://localhost:4444/_next/data/bQs8d56WdR8GTLSLGzSQh/posts/object-destructuring.json",
  "200 http://localhost:4444/_next/static/chunks/pages/posts/%5Bslug%5D-b24f464852c68f3511c5.js",
  "200 http://localhost:4444/_next/data/bQs8d56WdR8GTLSLGzSQh/posts/lamport-clocks.json",
  "200 http://localhost:4444/_next/static/chunks/668-b7e7bd028b1f1d460fda.js",
  "200 http://localhost:4444/_next/static/chunks/pages/posts/%5Bslug%5D-b24f464852c68f3511c5.js",
  "200 http://localhost:4444/_next/static/css/1d9f88c2652f0925fb44.css",
  "200 http://localhost:4444/_next/static/css/be468627d54e19a3cd9b.css",
  "LOG SW registered:  JSHandle@object",
]
`);
    expect(image).toMatchImageSnapshot({
      comparisonMethod: "ssim",
      failureThreshold: 0.01,
      failureThresholdType: "percent",
    });
  });
});
