import type { Request, Response } from "express";

import { Controller, Get, Injectable, Req, Res } from "@nestjs/common";

import { ROUTE, ROUTES } from "./auth.routes";

import env from "services/env.service";

@Injectable()
@Controller(ROUTE)
export class AuthController {
  @Get(ROUTES.GET)
  public async auth(@Req() req: Request, @Res() res: Response) {
    const { method } = req.params;

    if (method === "@me") {
      if (!req.query.code) return;

      try {
        const data = await (
          await fetch(
            env.AUTH_SERVICE_URL +
              "/api/auth/" +
              method +
              "?code=" +
              req.query.code,
          )
        ).json();

        return res.send(data);
      } catch (error) {
        console.log(error);

        return res.sendStatus(500);
      }
    }

    const redirect = req.query.callback?.toString() || req.hostname;

    res.cookie("redirect", redirect);

    res.redirect(
      env.AUTH_SERVICE_URL +
        "/api/auth/" +
        method +
        "?callback=" +
        env.THIS_URL +
        "/api/auth/" +
        method +
        "/callback",
    );
  }

  @Get(ROUTES.GET_CALLBACK)
  public callback(@Req() req: Request, @Res() res: Response) {
    const redirect = req.cookies["redirect"] || req.hostname;
    const code = req.query.code;

    if (!code) {
      return res.sendStatus(400);
    }

    return res.redirect(redirect + "?code=" + code);
  }
}
