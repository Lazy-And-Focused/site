import { env } from "env";

import { Request } from "express";

class Service {
  public constructor() {};

  public validateRequest(req: Request) {
    try {
      const auth = req.headers.authorization;
  
      if (!auth) {
        return false
      };
      
      const json = JSON.parse(auth);
  
      if (!json.TOKEN) {
        return false;
      };
  
      if (json.TOKEN !== env.get("AUTH_TOKEN")) {
        return false;
      };
  
      return true;
    } catch {
      return false;
    }
  };
}

export { Service };

export default Service;
