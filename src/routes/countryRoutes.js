import Router from "express";
import controllers from "../controllers";

const { countriesController } = controllers;
const {
  listCountries, getCountry, deleteCountry, updateCountry
} = countriesController;

const router = Router();

router.get("/get-country", getCountry);

router.get("/get-countries", listCountries);

router.delete("/delete-country", deleteCountry);

router.put("/update-country", updateCountry);

export default router;
