import type { Auth } from "types";

import passport = require("passport");

import Authenticator from "./authenticator";

export class Strategy {
  protected readonly _passport: passport.PassportStatic = passport;
  private readonly _authenticator: Authenticator;

  public constructor() {
    this.serializer();

    this._authenticator = new Authenticator(this._passport);
    
    this.auth.init();
  }

  public readonly initialize = () => {
    return this._passport.initialize();
  };

  public readonly session = () => {
    return this._passport.session();
  };

  public get passport() {
    return this._passport;
  }

  public get auth(): Authenticator {
    return this._authenticator;
  }

  private serializer() {
    this._passport.serializeUser((user: Auth, done) => {
      return done(null, {
        id: user.id,
        profile_id: user.profile_id,
        service_id: user.service_id,

        access_token: user.access_token,
        refresh_token: user.refresh_token,

        created_at: user.created_at,
        type: user.type,
      });
    });

    this._passport.deserializeUser(async (u: string, done) => {
      try {
        /* 
          FIND USER IN DATABASE
        */
      } catch (err) {
        console.error(err);

        return done(err, null);
      }
    });
  }
}

export default Strategy;
