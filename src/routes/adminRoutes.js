import { Router } from "express";
import AdminController from "../controllers/country";
import touristCenterController from "../controllers/touristCenterController";
import Authentication from "../middlewares/authenticate";

const { addCountry } = AdminController;
const { addTouristCenter } = touristCenterController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.post("/admin/country", verifyToken, verifyAdmin, addCountry);
router.post("/admin/tourist-center", verifyToken, verifyAdmin, addTouristCenter);
router.delete("/delete-tourist-center/:id", );
router.put("/update-tourist-center/:id", );

export default router;
