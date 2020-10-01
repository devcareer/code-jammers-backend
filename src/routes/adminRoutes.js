import { Router } from "express";
import adminController from "../controllers/addCountry";
import loggedIn from "../middlewares/loggedIn";
import isAdmin from "../middlewares/isAdmin";

const router = Router();
router.post("/admin/addcountry", loggedIn, isAdmin, adminController.addCountry);

export default router;
