import { Router } from "express";
import { requireAdmin, protectRoute } from "../middlewares/authmiddlewares.js";
import { createAlbum, createSong , deleteAlbum, deleteSong } from "../controllers/adminControllers.js";

const router = Router ();

router.post("/songs", protectRoute , requireAdmin , createSong );
router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong );
router.post("/albums", protectRoute , requireAdmin , createAlbum );
router.delete("/albums/:id", protectRoute, requireAdmin, deleteAlbum );

export default router;