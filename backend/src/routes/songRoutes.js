import { Router } from "express";
import { getAllsongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controllers/songControllers.js";
import { protectRoute, requireAdmin } from "../middlewares/authmiddlewares.js";

const router = Router ();

router.get("/", protectRoute, requireAdmin ,getAllsongs);
router.get("/featured", getFeaturedSongs );
router.get("/made-for-you", getMadeForYouSongs );
router.get("/trending", getTrendingSongs );


export default router;