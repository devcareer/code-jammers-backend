import { Router } from "express";
import AdminController from "../controllers/country";
import Authentication from "../middlewares/authenticate";

const { addCountry } = AdminController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.post("/admin/country", verifyToken, verifyAdmin, addCountry);

export default router;
