const timeout = 5000

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('https://www.cnblogs.com/zy7y')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    test('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      // console.log(text)
      expect(text).toMatch("博客园")
    })
  },
  timeout
)
