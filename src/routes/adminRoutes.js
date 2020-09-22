import { Router } from "express";
import adminController from "../controllers/addCountry";

const router = Router();
router.post("/addCountry", adminController.addCountry);

export default router;
