import { Router } from "express";
import AdminController from "../controllers/country";
import touristCenterController from "../controllers/touristCenterController";
import Authentication from "../middlewares/authenticate";

const { addCountry } = AdminController;
const { addTouristCenter, updateTouristCenter, deleteTouristCenter } = touristCenterController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.post("/admin/country", verifyToken, verifyAdmin, addCountry);
router.post("/admin/tourist-center", verifyToken, verifyAdmin, addTouristCenter);
router.put("/admin/update-tourist-center", verifyToken, verifyAdmin, updateTouristCenter);
router.delete("/admin/delete-tourist-center", verifyToken, verifyAdmin, deleteTouristCenter);

export default router;
