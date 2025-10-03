import type { ServiceResponse } from "types/response.type";

import type { SocialCreateDto } from "./dto/social-create.dto";
import type { SocialUpdateDto } from "./dto/social-update.dto";

import { Injectable } from "@nestjs/common";

import { SOCIALS_API } from "@constants";

@Injectable()
export class Service {
  public async get(): Promise<ServiceResponse<typeof SOCIALS_API>> {
    return {
      successed: true,
      data: SOCIALS_API,
      error: null
    };
  }

  public async postSocial(data: SocialCreateDto): Promise<ServiceResponse<Social>> {
    return {
      successed: true,
      data: {},
      error: null
    };
  }

  public async put(id: string, data: SocialUpdateDto): Promise<ServiceResponse<Social>> {
    return {
      successed: true,
      data: {},
      error: null
    };
  }

  public async patch(id: string, data: SocialUpdateDto): Promise<ServiceResponse<Social>> {
    return {
      successed: true,
      data: {},
      error: null
    };
  }

  public async delete(id: string): Promise<ServiceResponse<string>> {
    return {
      successed: true,
      data: "deleted",
      error: null
    };
  }
}