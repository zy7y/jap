# 说明
jest + puppeteer + allure E2E测试基础目录(jest puppeteer allure 初步集成)
# 实现
1. allure报告
2. jest(保证测试过程中只有一个浏览器对象)
3. puppeteer 操作浏览器
# 使用
1. git clone https://github.com/zy7y/jap
2. npm install
3. npm run test
**4/5选一个就可以了**
4. allure serve  # 查看报告
5. allure generate # 本地生成报告

# 报告
![](https://gitee.com/zy7y/blog_images/raw/master/img/20210126191747.png)
# 参考链接
https://blog.csdn.net/maggie_1212/article/details/107015198
https://www.jestjs.cn/docs/puppeteer
https://www.npmjs.com/package/jest-allure


# 目前问题
- 无头模式下:
>Execution context was destroyed, most likely because of a navigation.

- 有头模式下:
>UnhandledPromiseRejectionWarning: Error: Navigation failed because browser has disconnected!
