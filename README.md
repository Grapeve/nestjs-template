## 1. 简介

💭 A nest framework starter template.

## 2. 版本

nodejs: v18.17.1

nest : v10

## 3. 启动

```bash
# Installation
$ pnpm install

# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## 4. 已添加

- Swagger 接口文档
  - path: host:port + /api/doc

* Middleware 中间件
  - 日志系统
  - cors跨域

- 连接 mysql 数据库
  > config/db-config.ts 配置

* @nestjs/config
  > 环境变量配置在.env 文件中

- Filter 过滤器

  - Http异常拦截器

- Interceptor 拦截器
  - 成功响应拦截器
