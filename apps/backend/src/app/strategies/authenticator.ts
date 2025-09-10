import type { Profile } from "passport";
import type { Strategy, VerifyCallback, VerifyFunction } from "passport-oauth2";

import type { AuthTypes } from "types";

import passport = require("passport");

import { getPassportEnv } from "services/env.service";

/* const CreateOrUpdate = async <T>({
  model,
  findData,
  data
}: {
  model: Model<T>;
  findData: Partial<T>;
  data: Partial<T>;
}) => {
  // database code...
}; */

const defaultPassports: Record<AuthTypes, { path: string; scopes: string[] }> =
  {
    google: {
      path: "passport-google-oauth20",
      scopes: [],
    },
  };

export class Authenticator {
  private readonly _passport: passport.PassportStatic;

  public constructor(passport: passport.PassportStatic) {
    this._passport = passport;
  }

  public init = () => {
    for (const passport in defaultPassports) {
      const { path, scopes } = defaultPassports[passport];

      const { Strategy } = require(path);
      this.strategy(Strategy, {
        ...getPassportEnv(passport.toUpperCase() as Uppercase<AuthTypes>),
        type: path,
        scopes: scopes,
      });
    }
  };

  protected verify<Done extends (...data: unknown[]) => void = VerifyCallback>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type: AuthTypes,
  ) {
    return async (
      access_token: string,
      refresh_token: string,
      profile: Profile,
      done: Done,
    ) => {
      try {
        // const { id } = profile;

        /* 
          AUTH AND USER CREATING...
          (use CreateOrUpdate)
        */

        return done(null, null);
      } catch (error) {
        console.log(error);

        return done(error, null);
      }
    };
  }

  protected strategy(
    strategy: new (
      options: {
        clientID: string;
        clientSecret: string;
        callbackURL: string;
        scope?: string[];
      },
      verify: VerifyFunction,
    ) => Strategy,
    api: {
      id: string;
      secret: string;
      callback: string;
      scopes?: string[];
      type: AuthTypes;
      authURL?: string;
      tokenURL?: string;
    },
  ) {
    this._passport.use(
      new strategy(
        {
          clientID: api.id,
          clientSecret: api.secret,
          callbackURL: api.callback,
          scope: api.scopes,
        },
        this.verify(api.type),
      ),
    );
  }
}

export default Authenticator;
