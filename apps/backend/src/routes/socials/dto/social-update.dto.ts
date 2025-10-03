import type { Social } from "types/social.type";

import { ApiProperty } from "@nestjs/swagger";

export class SocialUpdateDto implements Partial<Social> {
  @ApiProperty()
  id: string;
  
  @ApiProperty()
  text: string;
}