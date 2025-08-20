import { Router } from "express";

import { ROUTES, ROUTER } from "./routes";

import Controller from "./controller";

const controller = new Controller();
const router = Router();

router.get(ROUTES.GET_ALL, controller.getAll);
router.get(ROUTES.GET_ONE, controller.getOne);

export { ROUTER }

export default router;
