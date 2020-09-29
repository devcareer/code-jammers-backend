import { Router } from "express";
import adminController from "../controllers/addCountry";
import loggedIn from "../middlewares/loggedIn";
import auth from "../middlewares/isAdmin";

const router = Router();
router.post("/admin/addcountry", auth.isAdmin, adminController.addCountry);

export default router;
