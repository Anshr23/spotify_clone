import { Router } from "express";
import { getAllsongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controllers/songControllers.js";
import { protectRoute, requireAdmin } from "../middlewares/authmiddlewares.js";

const router = Router ();

router.get("/", protectRoute, requireAdmin ,getAllsongs);
//u can simply use just one getFeaturedSongs no need for making more same function cause htey are same only 
router.get("/featured", getFeaturedSongs );
router.get("/made-for-you", getMadeForYouSongs );
router.get("/trending", getTrendingSongs );


export default router;