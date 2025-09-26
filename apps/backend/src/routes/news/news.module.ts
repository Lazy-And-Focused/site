import { Module } from "@nestjs/common";

import { Controller } from "./news.controller";
import { Service } from "./news.service";

@Module({
  imports: [],
  controllers: [Controller],
  providers: [Service]
})
export default class NewsModule {}
