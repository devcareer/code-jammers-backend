import { Router } from "express";
import AdminController from "../controllers/country";
import Authentication from "../middlewares/authenticate";
import CultureController from "../controllers/culture";

const {
  getCultureByCountry
} = CultureController;

const { addCountry } = AdminController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.post("/admin/country", verifyToken, verifyAdmin, addCountry);

router.get("/culture/:id", getCultureByCountry);

export default router;
