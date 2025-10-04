import type { Social } from "types/social.type";

import { ApiProperty } from "@nestjs/swagger";

export class SocialUpdateDto implements Partial<Social> {
  @ApiProperty()
  text: string;
}