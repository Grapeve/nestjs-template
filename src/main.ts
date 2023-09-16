import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as packageConfig from '../package.json';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './base/filter/http-exception/http-exception.filter';
import { HttpSuccessInterceptor } from './base/interceptor/http-success/http-success.interceptor';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  // swagger
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .addBearerAuth() // 增加鉴权功能
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/doc', app, document);

  // 注册全局DTO验证管道
  app.useGlobalPipes(new ValidationPipe());

  // Filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Interceptor
  app.useGlobalInterceptors(new HttpSuccessInterceptor());

  await app.listen(3000);
}

bootstrap();
