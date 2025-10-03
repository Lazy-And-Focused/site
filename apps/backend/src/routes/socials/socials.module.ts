import { Module } from "@nestjs/common";

import { Controller } from "./socials.controller";
import { Service } from "./socials.service";

@Module({
  imports: [],
  controllers: [Controller],
  providers: [Service]
})
export default class SocialsModule {}
