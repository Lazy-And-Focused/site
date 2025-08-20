import { Router } from "express";

import { ROUTES, ROUTER } from "./routes";
import Controller from "./controller";

const controller = new Controller();
const router = Router();

router.get(ROUTES.GET, controller.get);

export { ROUTER }

export default router;
