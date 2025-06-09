import { Router } from "express";
import { protectRoute } from "../middlewares/authmiddlewares.js";
import { getAllusers } from "../controllers/userControllers.js";

const router = Router();

router.get('/', protectRoute, getAllusers);

export default router;

