import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { LoggerMiddleware } from './base/middleware/logger/logger.middleware';
import { UserController } from './module/user/user.controller';
import { dbConfig } from './config/db.config';
import { ConfigModule } from '@nestjs/config';
import { GameModule } from './module/websocket/game/game.module';

@Module({
  imports: [
    UserModule,
    GameModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
    }),
    TypeOrmModule.forRoot(dbConfig() as any),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UserController);
  }
}
