import { Request, Response } from "express";
import Service from "./service";

import AuthService from "services/auth.service";
import Members from "models/members.model";
import { REQUIRED as RequiredMemberKeys, DEFAULT } from "types/member.type";
import Parser from "database/parse";

const parser = new Parser("members");
const service = new Service();
const { validateRequest } = new AuthService();

class Controller {
  public constructor() {}

  public async getAll(_req: Request, res: Response) {
    const members = await service.getAll();
    
    validateRequest(_req);

    res.send({data: members});
  }

  public async getOne(req: Request, res: Response) {
    const name = req.params.name;

    if (!name) {
      res.status(400).send({data: {}, error: `params not found`})
      return;
    }

    const member = await service.getOne(name);

    res.send({data: member});
  }

  public async post(req: Request, res: Response) {
    const validated = validateRequest(req);
    
    if (!validated) {
      res.status(403);
      return;
    };

    RequiredMemberKeys.forEach(k => {
      if (!(k in req.body)) {
        res.status(418);
        return;
      };
    });

    const member = parser.execute({...DEFAULT, ...req.body});
    const createdMember = await Members.create(member);

    res.send({data: parser.execute(createdMember)});
  }

  public async put(req: Request, res: Response) {
    const name = req.params.name;

    if (!name) {
      res.status(400).send({data: {}, error: `params not found`})
      return;
    }

    const validated = validateRequest(req);
    
    if (!validated) {
      res.status(403);
      return;
    };

    const updatedMember = await Members.updateOne({ name: name }, req.body);
    
    res.send({ data: updatedMember });
  }

  public async delete(req: Request, res: Response) {
    const name = req.params.name;

    if (!name) {
      res.status(400).send({data: {}, error: `params not found`})
      return;
    }

    const validated = validateRequest(req);
    
    if (!validated) {
      res.status(403);
      return;
    };

    const deletedMember = await Members.deleteOne({ name: name });

    res.send({ data: deletedMember });
  }
}

export { Controller };

export default Controller;
