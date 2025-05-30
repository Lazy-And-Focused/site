import { Request, Response } from "express";

import Service from "./service";
import QueryService from "services/query.service";

const service = new Service();
const queryService = new QueryService([
  "length", "offset"
] as const);

class Controller {
  public constructor() {}

  public async getOne(req: Request, res: Response) {
    const news = await service.getOne(req.params.name);
    
    res.send({data: news});
  }

  public async getAll(req: Request, res: Response) {
    const query = queryService.parse(req.query, {
      length: "-1",
      offset: "0"
    });

    if (Number.isNaN(Number(query.length))) query.length = "-1";
    if (Number.isNaN(Number(query.offset))) query.offset = "0";
    
    const news = await service.getAll(query);
    
    res.send({data: news});
  }
}

export { Controller };

export default Controller;
