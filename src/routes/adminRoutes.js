import { Router } from "express";
import adminController from "../controllers/addCountry";
import Authentication from "../middlewares/isAdmin";

const { addCountry } = adminController;
const { verifyAdmin } = Authentication;

const router = Router();
router.post("/admin/country", verifyAdmin, addCountry);

export default router;
