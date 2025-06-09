import { Router } from "express";
import { getstats } from "../controllers/statsControllers.js";
import { protectRoute , requireAdmin } from "../middlewares/authmiddlewares.js";

const router = Router ();

router.get("/", protectRoute, requireAdmin ,getstats);

export default router;