import type { Request } from "express";
import type { Auth } from "types";

import Hash from "services/hash.service";

import authErrors from "src/errors/guards/auth.errors";

export class Service {
  public static async validateRequest(req: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { successed, id, token, profile_id } = Hash.parse(req);

    if (!successed) {
      console.log(authErrors.HASH_PARSE);
      return false;
    }

    const findedUser = {} as Auth;
    // const findedUser = await auth.findOne({ id: id });

    if (!findedUser) {
      console.log(authErrors.USER_NOT_FOUND);
      return false;
    }

    if (findedUser.profile_id !== profile_id) {
      console.log(authErrors.PROFILE_ID_ERROR);
      return false;
    }

    if (token !== new Hash().execute(findedUser.access_token)) {
      console.log(authErrors.TOKEN_ERROR);
      return false;
    }

    const profileUser = {};
    // const profileUser = await users.findOne({ id: findedUser.profile_id });

    if (!profileUser) {
      console.log(authErrors.PROFILE_NOT_FOUND);
      return false;
    }

    console.log("User access granted");
    return true;
  }
}

export default Service;
