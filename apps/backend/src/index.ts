import { env } from "env";

import express from "express";
import App from "./app";

import connect from "./database/connect";
import { start } from "./telegram/index";
// import { initializeProjects } from "./init";

const app = new App(express())

// initializeProjects()
start()
connect(env.get("MONGO_URL"));
app.listen();

export {
  app,
};