import { Router } from "express";
import adminController from "../controllers/addCountry";
import loggedIn from "../middlewares/loggedIn";
import isAdmin from "../middlewares/isAdmin";

const { addCountry } = adminController;

const router = Router();
router.post("/admin/addcountry", loggedIn, isAdmin, addCountry);

export default router;
