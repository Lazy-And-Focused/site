import type { NewsCreateDto } from "./dto/news-create.dto";
import type { NewsUpdateDto } from "./dto/news-update.dto";

import { Public } from "decorators/public.decorator";
import { AuthGuard } from "guards/auth/auth.guard";

import {
  Controller as NestController,
  Injectable,
  Get,
  Param,
  Post,
  Body,
  Put,
  Patch,
  Delete,
  UseGuards,
  HttpStatus,
  Query
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";

import { ROUTE, ROUTES } from "./news.routes";
import { Service } from "./news.service";

const resolveSlug = (slug: string) => slug.startsWith("@")
  ? { name: slug.slice(1) }
  : { id: slug };

@Injectable()
@NestController(ROUTE)
@UseGuards(AuthGuard)
export class Controller {
  public constructor(
    private readonly service: Service
  ) {}

  @ApiOperation({
    summary: "Getting an array of news"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Getted"
  })
  @Get(ROUTES.GET)
  @Public()
  public get(
    @Query("length") length?: string,
    @Query("offset") offset?: string,
    @Query("sortBy") sortBy?: string,
    @Query("sortType") sortType?: string
  ) {
    const query = {
      length: "-1",
      offset: "0",
    };

    if (length && Number.isNaN(+length)) query.length = "-1";
    if (offset && Number.isNaN(+offset)) query.offset = "0";

    return this.service.get({
      ...query,
      sortBy: sortBy || "",
      sortType: sortType || ""
    });
  }

  @ApiOperation({
    summary: "Getting a news by id"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Getted"
  })
  @Get(ROUTES.GET_ONE)
  @Public()
  public getOne(
    @Param("slug") slug: string
  ) {
    return this.service.getOne(resolveSlug(slug));
  }

  @ApiOperation({
    summary: "Creaing a news"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Created"
  })
  @Post(ROUTES.POST)
  public post(
    @Body() data: NewsCreateDto 
  ) {
    return this.service.post(data);
  }

  @ApiOperation({
    summary: "Updating a news"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Updated"
  })
  @Put(ROUTES.PUT)
  public put(
    @Param("slug") slug: string,
    @Body() data: NewsUpdateDto 
  ) {
    return this.service.put(resolveSlug(slug), data);
  }

  @ApiOperation({
    summary: "Updating a news"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Updated"
  })
  @Patch(ROUTES.PUT)
  public patch(
    @Param("slug") slug: string,
    @Body() data: NewsUpdateDto 
  ) {
    return this.service.patch(resolveSlug(slug), data);
  }
  
  @ApiOperation({
    summary: "Deleting a news"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Deleted"
  })
  @Delete(ROUTES.DELETE)
  public delete(
    @Param("slug") slug: string
  ) {
    return this.service.delete(resolveSlug(slug));
  }
}