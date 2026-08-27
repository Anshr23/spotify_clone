import { Router } from "express";
import { requireAdmin, protectRoute } from "../middlewares/authmiddlewares.js";
import { checkAdmin, createAlbum, createSong , deleteAlbum, deleteSong } from "../controllers/adminControllers.js";

const router = Router();

//cleaner version
// router.use(protectRoute, requireAdmin);
// router.get("/check", checkAdmin );

// router.post("/songs", createSong );
// router.delete("/songs/:id", deleteSong );

// router.post("/albums", createAlbum );
// router.delete("/albums/:id", deleteAlbum );

router.get("/check", protectRoute, requireAdmin, checkAdmin );

router.post("/songs", protectRoute , requireAdmin , createSong );
router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong );

router.post("/albums", protectRoute , requireAdmin , createAlbum );
router.delete("/albums/:id", protectRoute, requireAdmin, deleteAlbum );


export default router;