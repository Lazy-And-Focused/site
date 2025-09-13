import type { Request } from "express";

import env from "@env";

export class Service {
  public static async validateRequest(req: Request) {
    try {
      const response = await fetch(env.AUTH_SERVICE_URL + "/api/guard/auth", {
        method: "GET",
        headers: Object.keys(req.headers).map(key => [key, JSON.stringify(req.headers[key])])
      });
  
      if (response.status !== 200) return false;
  
      const [ successed ] = await response.json();
  
      return successed;
    } catch (error) {
      console.error(error);
      return false;      
    }
  }
}

export default Service;
