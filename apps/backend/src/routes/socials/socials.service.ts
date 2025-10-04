import type { ServiceResponse } from "types/response.type";

import type { SocialCreateDto } from "./dto/social-create.dto";
import type { SocialUpdateDto } from "./dto/social-update.dto";

import type { Methods, Parameters } from "src/api";

import { Injectable } from "@nestjs/common";

import { NEWS_API_OBJECT } from "src/api"
import { SOCIALS_API } from "@constants";

const SOCIALS = SOCIALS_API as readonly string[];

@Injectable()
export class Service {
  public get(): ServiceResponse<typeof SOCIALS_API> {
    return {
      successed: true,
      data: SOCIALS_API,
      error: null
    };
  }

  public static async socialService<T extends keyof Methods>({
    data,
    social,
    method
  }: {
    social: string,
    data: Parameters[T],
    method: T
  }): Promise<ServiceResponse<string>> {
    if (!SOCIALS.includes(social)) {
      throw new Error("Bad social, choose: " + SOCIALS.join(", "));
    };

    NEWS_API_OBJECT[social][method](<any>data);
    
    return {
      successed: true,
      data: "Мы что-то сделали",
      error: null
    };
  }

  public async postSocial(social: string, data: SocialCreateDto): Promise<ServiceResponse<string>> {
    return Service.socialService({ social, data, method: "post" });
  }

  public async putSocial(social: string, id: string, data: SocialUpdateDto): Promise<ServiceResponse<string>> {
    return Service.socialService({ social, data: { id, ...data }, method: "put" });
  }

  public async deleteSocial(social: string, id: string): Promise<ServiceResponse<string>> {
    return Service.socialService({ social, data: { id }, method: "delete" });
  }
}