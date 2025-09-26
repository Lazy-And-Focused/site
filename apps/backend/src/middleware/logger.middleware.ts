import type { Request, Response, NextFunction } from "express";

import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  public use(req: Request, _res: Response, next: NextFunction) {
    console.log("Request...", req.url);
    next();
  }
}

export default LoggerMiddleware;
