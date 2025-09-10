import type { IMember } from "types/members.type";

import { ApiProperty } from "@nestjs/swagger";
import { ILink } from "types";

export class MembersUpdateDto implements Partial<IMember> {
  @ApiProperty()
  name?: string;
  
  @ApiProperty()
  role?: string;
  
  @ApiProperty()
  tag?: string;
  
  @ApiProperty()
  description?: string;
  
  @ApiProperty()
  socials?: ILink[];
  
  @ApiProperty()
  avatar?: string;
  
  @ApiProperty()
  meta?: string[];
}