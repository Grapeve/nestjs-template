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

## 4. 项目结构

- src<br>
  ├─ base 存放服务需要的一些基础内容，如拦截器、过滤器等。<br>
  ├─ config 存放数据库等配置项。<br>
  └─ module 按照不同业务领划分出的子目。<br>

## 5. 已添加

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

* Pipe 管道
  - 自定义验证
    - 使用 @UsePipes
    - 使用 class-validator 的@Validate ( 优先级高于 @UsePipes )
    * 使用 class-validator 自定义验证修饰器

## 6. 部署到服务器(使用pm2)

1. 将项目除了 `node_modules` 文件夹外的所有文件上传至服务器。
2. `pnpm install` 安装依赖。
3. `pnpm run build` 打包。
4. `pm2 start dist/src/main.js --name demo` 运行项目,并命名为`demo`，可自定义。
5. `pm2 ls` 查看项目是否运行成功。
