import { Router } from "express";

import { ROUTES, ROUTER } from "./routes";

import Controller from "./controller";

const controller = new Controller();
const router = Router();

router.get(ROUTES.GET_ALL, controller.getAll);
router.get(ROUTES.GET_ONE, controller.getOne);

router.post(ROUTES.POST, controller.post);
router.put(ROUTES.PUT, controller.put);
router.delete(ROUTES.DELETE, controller.delete);

export { ROUTER };

export default router;
