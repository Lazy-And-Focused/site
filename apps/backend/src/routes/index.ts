import { Router } from "express";

import status from "./status";
import api from "./api";

const router = Router();

router.use("/status/", status);
router.use("/api/", api);

export { router };

export default router;
