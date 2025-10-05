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
  Delete,
  UseGuards,
  HttpStatus,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";

import { ROUTE, ROUTES } from "./socials.routes";
import { Service } from "./socials.service";

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
    return this.service.get().data;
  }

  @ApiOperation({
    summary: "Creaing a social"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Created"
  })
  @Post(ROUTES.POST_SOCIAL)
  @Public()
  public post(
    @Param("social") social: string, 
    @Body() data: SocialCreateDto
  ) {
    return this.service.postSocial(social, data);
  }

  @ApiOperation({
    summary: "Updating a social"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Updated"
  })
  @Put(ROUTES.PUT_SOCIAL)
  public put(
    @Param("id") id: string,
    @Param("social") social: string,
    @Body() data: SocialUpdateDto
  ) {
    return this.service.putSocial(social, id, data);
  }
  
  @ApiOperation({
    summary: "Deleting a social"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Deleted"
  })
  @Delete(ROUTES.DELETE_SOCIAL)
  public delete(
    @Param("id") id: string,
    @Param("social") social: string
  ) {
    return this.service.deleteSocial(social, id);
  }
}