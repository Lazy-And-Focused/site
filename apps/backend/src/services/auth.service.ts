import type { NextFunction, Request, Response } from "express";

import type { Auth, AuthTypes } from "types";
import { AUTH_TYPES } from "types";

import { Next, Req, Res } from "@nestjs/common";

import passport = require("passport");

const abbreviations: Map<string, AuthTypes> = new Map([]);

type GenerateReturnProps<T = unknown> =
  | boolean
  | {
      successed: boolean;
      body?: T;
      method?: string;
    };

export class AuthApi {
  private readonly _method: string;

  public constructor(method: string) {
    this._method = method;
  }

  static get methods(): Record<"abbreviations" | "methods", readonly string[]> {
    return {
      abbreviations: Array.from(abbreviations.keys()),
      methods: AUTH_TYPES,
    };
  }

  public auth(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): unknown {
    const { successed, method, body } = this.getMethod();

    if (!successed) {
      return res.send(body);
    }

    return passport.authenticate(method)(req, res, next);
  }

  public callback(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
    callback: (...args: [unknown, Auth | null, unknown]) => unknown,
  ): unknown {
    const { successed, method, body } = this.getMethod();

    if (!successed) {
      return res.send(body);
    }

    return passport.authenticate(method, callback)(req, res, next);
  }

  private getMethod(): { successed: boolean; method: string; body: unknown } {
    if ((AUTH_TYPES as unknown as string[]).includes(this._method)) {
      return this.generateReturn(true);
    }

    const abbreviation = abbreviations.get(this._method);
    if (abbreviation) {
      return this.generateReturn({ successed: true, method: abbreviation });
    }

    return this.generateReturn({
      successed: false,
      body: {
        message: "Sorry, but method " + this._method + " not found. Try next:",
        methods: AUTH_TYPES,
      },
    });
  }

  private generateReturn(data: GenerateReturnProps) {
    return typeof data === "boolean"
      ? {
          successed: data,
          body: null,
          method: this._method,
        }
      : ({
          successed: data.successed,
          body: data.body || null,
          method: data.method || this._method,
        } as const);
  }
}

export default AuthApi;
