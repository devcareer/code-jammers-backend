import Router from "express";
import controllers from "../controllers";
import Authentication from "../middlewares/authenticate";

const { verifyAdmin, verifyToken } = Authentication;

const { countriesController } = controllers;
const {
  listCountries, getCountry, deleteCountry, updateCountry
} = countriesController;

const router = Router();

router.get("/get-country", getCountry);

router.get("/get-countries", listCountries);

router.delete("/delete-country", verifyToken, verifyAdmin, deleteCountry);

router.put("/update-country", verifyToken, verifyAdmin, updateCountry);

export default router;
