const chalk = require('chalk')
const puppeteer = require('puppeteer')
const fs = require('fs')
const mkdirp = require('mkdirp')
const os = require('os')
const path = require('path')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function() {
  console.log(chalk.green('测试开始>打开浏览器...'))
  const browser = await puppeteer.launch({
    headless: false,
    slowMo:500, //slow down by 250ms, 减慢运行的速度，更好的看清楚操作
    browserContext: 'incognito', // 无痕模式
  })
  // 全局浏览器对象，再内部无法使用
  global.__BROWSER_GLOBAL__ = browser
  // Instead, we expose the connection details via file system to be used in tests
  mkdirp.sync(DIR)
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}
