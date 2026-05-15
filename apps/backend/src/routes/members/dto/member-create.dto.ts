import type { ICreateMember } from "types/members.type";

import { ApiProperty } from "@nestjs/swagger";
import { ILink } from "types";

export class MemberCreateDto implements ICreateMember {
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  role: string;
  
  @ApiProperty()
  tag: string;
  
  @ApiProperty()
  description?: string;
  
  @ApiProperty()
  socials?: ILink[];
  
  @ApiProperty()
  avatar?: string;
  
  @ApiProperty()
  meta?: string[];
}