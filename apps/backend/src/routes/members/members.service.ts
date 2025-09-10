import type { Members } from "types/members.types";
import type { ServiceResponse } from "types/promise/response.types";

import type { MembersCreateDto } from "./dto/members-create.dto";
import type { MembersUpdateDto } from "./dto/members-update.dto";

import { Injectable } from "@nestjs/common";

@Injectable()
export class Service {
  public async get(): ServiceResponse<Members[]> {
    return {
      successed: true,
      data: [],
      error: null
    };
  }

  public async getOne(id: string): ServiceResponse<Members> {
    return {
      succeesd: true,
      data: {},
      error: null
    };
  }

  public async post(data: MembersCreateDto): ServiceResponse<Members> {
    return {
      successed: true,
      data: {},
      error: null
    };
  }

  public async put(id: string, data: MembersUpdateDto): ServiceResponse<Members> {
    return {
      successed: true,
      data: {},
      error: null
    };
  }

  public async patch(id: string, data: MembersUpdateDto): ServiceResponse<Members> {
    return {
      successed: true,
      data: {},
      error: null
    };
  }

  public async delete(id: string): ServiceResponse<string> {
    return {
      successed: true,
      data: "deleted",
      error: null
    };
  }
}