const puppeteer = require('puppeteer');
describe('Homepage loads', () => {
    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch();
    });

    it('works', async () => {
        const page = await browser.newPage();
        await page.goto(`file://${__dirname}/../out/index.html`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            comparisonMethod: 'ssim',
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    afterAll(async () => {
        await browser.close();
    });
});
it('works', () => {
    expect(1).toEqual(1)
})
