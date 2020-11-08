import Router from "express";
import musicController from "../controllers/music";
import Authentication from "../middlewares/authenticate";

// eslint-disable-next-line max-len
const {
  getAllMusic, getMusic, addMusic, updateMusic, deleteMusic
} = musicController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();

router.get("/music/:id", getMusic);
router.get("/music", getAllMusic);
router.post("/admin/music/:countryId", verifyToken, verifyAdmin, addMusic);
router.patch("/admin/music/:id", verifyToken, verifyAdmin, updateMusic);
router.delete("/admin/music/:id", verifyToken, verifyAdmin, deleteMusic);

export default router;
