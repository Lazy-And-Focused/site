import type { NextFunction, Request, Response } from "express";

import { Controller, Get, Injectable, Next, Req, Res } from "@nestjs/common";

import { ROUTE, ROUTES } from "./auth.routes";

import env from "services/env.service";
import Hash from "services/hash.service";
import AuthApi from "services/auth.service";

@Injectable()
@Controller(ROUTE)
export class AuthController {
  @Get()
  public printMethods() {
    const { abbreviations, methods } = AuthApi.methods;
    const toStr = (str: unknown) => JSON.stringify(str, undefined, 4);

    return {
      message: `Sorry, but you can't auth without method, try next methods:\n${toStr(methods)}\nAnd this abbreviations:\n${toStr(abbreviations)}`,
      abbreviations,
      methods,
    };
  }

  @Get(ROUTES.GET)
  public auth(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    return new AuthApi(req.params.method).auth(req, res, next);
  }

  @Get(ROUTES.GET_CALLBACK)
  public callback(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    return new AuthApi(req.params.method).callback(
      req,
      res,
      next,
      (...args) => {
        const user = args[1];

        if (!user) return;

        res.cookie(
          "id-token",
          `${user.id}-${user.profile_id}-${new Hash().execute(user.access_token)}`,
        );

        res.redirect(env.CLIENT_URL);
      },
    );
  }
}

export default AuthController;
