const timeout = 3000
const report = require('jest-allure/dist/Reporter')



// 直接使用reporter来给报告加点料: https://www.npmjs.com/package/jest-allure
describe("调式allure报告", () =>{
    beforeAll(async ()=>{
        page = await global.__BROWSER__.newPage();
    },timeout)
    
    afterAll(async ()=>{
        await page.close();
    },timeout)
    
    test("百度输入测试", async () => {//声明是异步函数
        reporter
        .description("Feature should work cool")
        .feature("feature")
        .severity(report.Severity.Critical)
        .story("BOND-007");

        reporter.startStep("1.打开百度首页");
        page.goto("https://www.baidu.com", {
            waitUntil: 'networkidle2', //等待网络状态为空闲的时候才继续执行,
            timeout: 180000
        });
        reporter.endStep();
        const screenshotBuffer = await page.screenshot({timeout:10000});
        reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");
        //添加assertion，验证百度的标题是否正确

        const pageTitle = await page.title();
        // document.body.textContent 获取页面所有内容js脚本
        // let test = await page.evaluate(() => document.body.textContent)
        // console.log(test)
        await expect(pageTitle).toMatch('百度一下，你就知道');
    
        await page.focus('#kw');
        await page.type('#kw', 'puppeteer');
    }, timeout) //设置timeout时间为10000 ms
})