import type { SocialCreateDto } from "./dto/social-create.dto";
import type { SocialUpdateDto } from "./dto/social-update.dto";

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
  HttpStatus
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";

import { ROUTE, ROUTES } from "./socials.routes";
import { Service } from "./socials.service"

@Injectable()
@NestController(ROUTE)
@UseGuards(AuthGuard)
export class Controller {
  public constructor(
    private readonly service: Service
  ) {}

  @ApiOperation({
    summary: "Getting an array of social"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Getted"
  })
  @Get(ROUTES.GET_SOCIALS)
  @Public()
  public get() {
    return this.service.get();
  }

  @ApiOperation({
    summary: "Creaing a social"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Created"
  })
  @Post(ROUTES.POST)
  public post(
    @Body() data: SocialCreateDto 
  ) {
    return this.service.post(data);
  }

  @ApiOperation({
    summary: "Updating a social"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Updated"
  })
  @Put(ROUTES.PUT)
  public put(
    @Param("id") id: string,
    @Body() data: SocialUpdateDto 
  ) {
    return this.service.put(id, data);
  }

  @ApiOperation({
    summary: "Updating a social"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Updated"
  })
  @Patch(ROUTES.PUT)
  public patch(
    @Param("id") id: string,
    @Body() data: SocialUpdateDto 
  ) {
    return this.service.patch(id, data);
  }
  
  @ApiOperation({
    summary: "Deleting a social"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Deleted"
  })
  @Delete(ROUTES.DELETE)
  public delete(
    @Param("id") id: string
  ) {
    return this.service.delete(id);
  }
}