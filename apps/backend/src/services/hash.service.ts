import type { Request } from "express";

import crypto from "crypto";

import { env } from "./env.service";

const PARSE_ERROR = {
  successed: false,
  id: false,
  profile_id: false,
  token: false,
} as const;

type ParseReturnType =
  | Readonly<{
      successed: true;
      id: string;
      profile_id: string;
      token: string;
    }>
  | typeof PARSE_ERROR;

export class Hash {
  private readonly _hmac: crypto.Hmac;

  public constructor() {
    this._hmac = crypto.createHmac("sha512", env.HASH_KEY);
  }

  public execute(data: string) {
    this._hmac.update(data);
    return this._hmac.digest("hex");
  }

  public static generateCode(data: string = (Math.random() * 1000).toString()) {
    return crypto
      .createHmac("sha512", env.HASH_KEY)
      .update(new Date().getTime().toString() + data)
      .digest("base64");
  }

  public static resolveToken(token: string): ParseReturnType {
    const [method, hash] = token.split(" ");

    const tokenValided = method && hash;
    if (!tokenValided) {
      return PARSE_ERROR;
    }

    if (method === "Bearer") {
      const [id, profile_id, access_token] = hash.split("-");

      const valided = id && profile_id && access_token;
      if (!valided) {
        return PARSE_ERROR;
      }

      return {
        successed: true,
        id,
        profile_id,
        token: access_token,
      };
    } else {
      return PARSE_ERROR;
    }
  }

  public static parse(req: Request): ParseReturnType {
    const hash = req.headers.Authorization;

    if (hash === undefined) {
      return PARSE_ERROR;
    }

    try {
      return Hash.resolveToken(hash.toString());
    } catch {
      return PARSE_ERROR;
    }
  }
}

export default Hash;
