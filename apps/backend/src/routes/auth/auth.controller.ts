import type { NextFunction, Request, Response } from "express";

import { Controller, Get, Injectable, Next, Req, Res } from "@nestjs/common";

import { ROUTE, ROUTES } from "./auth.routes";

import env from "services/env.service";
import Hash from "services/hash.service";

@Injectable()
@Controller(ROUTE)
export class AuthController {
  @Get(ROUTES.GET)
  public auth(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
  }

  @Get(ROUTES.GET_CALLBACK)
  public callback(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {

  }
}

export default AuthController;
