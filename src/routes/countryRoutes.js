import { Router } from "express";
import AdminController from "../controllers/country";
import Authentication from "../middlewares/authenticate";
import controllers from "../controllers";

const { countriesController } = controllers;
const {
  listCountries, getCountry, deleteCountry, updateCountry
} = countriesController;

const { addCountry } = AdminController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.post("/admin/country", verifyToken, verifyAdmin, addCountry);

router.get("/country/:id", getCountry);

router.get("/countries", listCountries);

router.delete("/admin/country/:id", verifyToken, verifyAdmin, deleteCountry);

router.patch("/admin/country/:id", verifyToken, verifyAdmin, updateCountry);

export default router;
