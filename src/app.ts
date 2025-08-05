import { env } from "env";

import router from "routes";

import express, { Express } from "express";
import session from 'express-session';
import cors from "cors";

class Session {
  public constructor(public readonly app: Express = express()) {};

  public create = () => {
    this.app.use(session({
      secret: env.get("SESSION_SECRET"),
      resave: Boolean(env.get("RESAVE")),
      saveUninitialized: Boolean(env.get("SAVE_UNINITIALISED")),
      cookie: { maxAge: Number(env.get("COOKIE_AGE")) },
    }));
  };
};

class App {
  public constructor(
    public readonly app: Express,
    public readonly prefix: string = ""
  ) {};

  public listen() {
    this.init();
    const port = env.get("PORT", true);

    this.app.listen(port, () => {
      console.log("Server starting: http://localhost:"+port);
    });
  }

  private init() {
    this.app.use(cors({  origin: [ env.get("CLIENT_URL") ], credentials: true }));

    this.app.use(express.json());
    this.app.use(express.urlencoded());

    new Session(this.app);

    this.app.use("/" + this.prefix, router);
  };
}

export { App };

export default App;
