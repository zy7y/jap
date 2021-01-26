const timeout = 5000

describe(
  'jest + allure + puppeteer调试',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    test('是否能正常访问zy7y的博客园', async () => {
      // 可以直接使reporter给allure报告添加些东西
      reporter
            .description("测试描述：在网络正常的情况下访问zy7y博客园主页: https://www.cnblogs.com/zy7y")
            .story("开网页测试组")

      // 向allure报告中添加测试步骤
      reporter.startStep("1. 浏览器输入: https://www.cnblogs.com/zy7y ,并访问.")
      await page.goto('https://www.cnblogs.com/zy7y')
      reporter.endStep(); // 如果不使用endStep 下一个 startStep将被作为子分支呈现

      reporter.startStep("2. 获取当前页面所有文本内容.")
      let text = await page.evaluate(() => document.body.textContent)
      reporter.addAttachment("zy7y博客园首页内容(文字)", text)
      reporter.endStep(); 
      reporter.startStep("3. 对当前页面截图")
      const screenshotBuffer = await page.screenshot({timeout:10000});
      reporter.addAttachment("zy7y博客园首页", screenshotBuffer, "image/png");
      reporter.endStep(); 
      // console.log(text)

      reporter.startStep("4. 断言，当前页面是否包含字符串 博客园")
      expect(text).toMatch("博客园")
      reporter.endStep(); 
    })
  },
  timeout
)
