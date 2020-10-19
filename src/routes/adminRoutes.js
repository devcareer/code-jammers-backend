import { Router } from "express";
import adminController from "../controllers/country";
import Authentication from "../middlewares/authenticate";

const { addCountry } = adminController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.post("/admin/country", verifyToken, verifyAdmin, addCountry);

export default router;
