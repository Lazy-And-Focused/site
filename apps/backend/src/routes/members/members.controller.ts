import type { MembersCreateDto } from "./dto/members-create.dto";
import type { MembersUpdateDto } from "./dto/members-update.dto";

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

import { ROUTE, ROUTES } from "./members.routes";
import { Service } from "./members.service.ts"

@Injectable()
@NestController(ROUTE)
@UseGuards(AuthGuard)
export class Controller {
  public constructor(
    private readonly service: Service
  ) {}

  @ApiOperation({
    summary: "Getting an array of members"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Getted"
  })
  @Get(ROUTES.GET)
  @Public()
  public get() {
    return this.service.get()
  }

  @ApiOperation({
    summary: "Getting a members by id"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Getted"
  })
  @Get(ROUTES.GET_ONE)
  @Public()
  public getOne(
    @Param("id") id: string
  ) {
    return this.service.getOne(id);
  }

  @ApiOperation({
    summary: "Creaing a members"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Created"
  })
  @Post(ROUTES.POST)
  public post(
    @Body() data: MembersCreateDto 
  ) {
    return this.service.post(data);
  }

  @ApiOperation({
    summary: "Updating a members"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Updated"
  })
  @Put(ROUTES.PUT)
  public put(
    @Param("id") id: string,
    @Body() data: MembersUpdateDto 
  ) {
    return this.service.put(id, data);
  }

  @ApiOperation({
    summary: "Updating a members"
  })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Updated"
  })
  @Patch(ROUTES.PUT)
  public patch(
    @Param("id") id: string,
    @Body() data: MembersUpdateDto 
  ) {
    return this.service.patch(id, data);
  }
  
  @ApiOperation({
    summary: "Deleting a members"
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