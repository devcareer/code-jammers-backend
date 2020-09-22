<<<<<<< HEAD
import "./userRoutes";
=======
>>>>>>> 558dcee... feature(get country routes): create get country routes
import Router from "express";
import controllers from "../controllers";

const { countriesController } = controllers;
const { listCountries, getCountry } = countriesController;

const router = Router();

router.get("/get-country", getCountry);

router.get("/get-countries", listCountries);

export default router;
