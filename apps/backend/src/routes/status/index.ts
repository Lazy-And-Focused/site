import { Router } from "express";

import telegramRouter, { ROUTER as telegram } from "./telegram";
import databaseRouter, { ROUTER as database } from "./database";

const router = Router();

router.use(database, databaseRouter);
router.use(telegram, telegramRouter);

export default router;