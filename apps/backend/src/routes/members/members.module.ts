import { Module } from "@nestjs/common";

import { Controller } from "./members.controller";
import { Service } from "./members.service";

@Module({
  imports: [],
  controllers: [Controller],
  providers: [Service]
})
export default class MembersModule {}
