import type { CreateSocial } from "types/social.type";

import { ApiProperty } from "@nestjs/swagger";

export class SocialCreateDto implements CreateSocial {
  @ApiProperty()
  text: string;
}