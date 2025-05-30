import { Router } from "express";

import membersRouter, { ROUTER as members } from "./members";
import newsRouter, { ROUTER as news } from "./news";

const router = Router();

router.use(members, membersRouter);
router.use(news, newsRouter);

export default router;