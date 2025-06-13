import { Router } from "express";
import { protectRoute } from "../middlewares/authmiddlewares.js";
import { getAllusers , getMessages } from "../controllers/userControllers.js";

const router = Router();

router.get('/', protectRoute, getAllusers);
router.get('/messages/:userId', protectRoute, getMessages);

export default router;

