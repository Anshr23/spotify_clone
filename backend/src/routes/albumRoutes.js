import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controllers/albumControllers.js";

const router = Router ();

router.get("/", getAllAlbums );
router.get("/:albumID", getAlbumById );

export default router;