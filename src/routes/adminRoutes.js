import { Router } from "express";
import adminController from "../controllers/addCountry";
import loggedIn from "../middlewares/loggedIn";
import isAdmin from "../middlewares/isAdmin"; // import middleware from an index file

const { addCountry } = adminController;

const router = Router();
router.post("/admin/country", loggedIn, isAdmin, addCountry);

export default router;
