# Coding-TS

持续构建个人的代码练习仓库（JS/TS、数据结构、算法等）

# 数据结构

## 数组


## 如何使用 vitest
- pnpm run test 
  - 首先在 package.json 中配置好 scripts
  - 默认回跑项目中所有的测试用例，以及支持输出代码测试覆盖率
- pnpm run test -t [filename:reg] 支持运行根据正则表达式匹配到的测试用例文件
  - demo: pnpm run test -t two-sum
