import { Router } from "express";
import adminController from "../controllers/addCountry";
import loginAuth from "../middlewares/loggedIn";
import adminAuth from "../middlewares/isAdmin";

const router = Router();
router.post("/admin/addcountry", loginAuth.loggedIn, adminAuth.isAdmin, adminController.addCountry);

export default router;
