import type { INews } from "types/news.type";

import { ApiProperty } from "@nestjs/swagger";

export class NewsUpdateDto implements Partial<INews> {
  @ApiProperty()
  name?: string
  
  @ApiProperty()
  author?: string
  
  @ApiProperty()
  date?: string
  
  @ApiProperty()
  text?: string
  
  @ApiProperty()
  banner?: string
  
  @ApiProperty()
  icon?: string
  
  @ApiProperty()
  image?: string
}