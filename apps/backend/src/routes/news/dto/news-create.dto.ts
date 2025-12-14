import type { ICreateNews } from "types/news.type";

import { ApiProperty } from "@nestjs/swagger";

export class NewsCreateDto implements ICreateNews {
  @ApiProperty()
  name: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  date?: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  banner?: string;

  @ApiProperty()
  icon?: string;

  @ApiProperty()
  image?: string;
}
