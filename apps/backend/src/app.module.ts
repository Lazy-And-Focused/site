import type { NestModule, MiddlewareConsumer } from "@nestjs/common";

import { Module } from "@nestjs/common";

import { APP_INTERCEPTOR, RouterModule } from "@nestjs/core";
import { CacheModule, CacheInterceptor } from "@nestjs/cache-manager";

import { LoggerMiddleware } from "./middleware/logger.middleware";

import AuthModule from "./routes/auth/auth.module";
import NewsModule from "./routes/news/news.module";
import MembersModule from "./routes/members/members.module";
import SocialsModule from "./routes/socials/socials.module";

@Module({
  imports: [
    ...[AuthModule, NewsModule, MembersModule, SocialsModule].flatMap((module) => [
      module,
      RouterModule.register([{ path: "api", module }]),
    ]),
    CacheModule.register({
      ttl: 5 * 60 * 1000, // 5 minutes
      isGlobal: true,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/");
  }
}

export default AppModule;
