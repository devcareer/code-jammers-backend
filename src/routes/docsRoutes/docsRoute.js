import { Router } from "express";

import userDocs from "../../../docs/userDoc.json";
import newsletterDocs from "../../../docs/newsletterDoc.json";
import countryStateDoc from "../../../docs/country-stateDoc.json";

const swaggerUi = require("swagger-ui-express");

const router = Router();

router.get("/user", swaggerUi.setup(userDocs));
router.get("/newsletter", swaggerUi.setup(newsletterDocs));
router.get("/country-state", swaggerUi.setup(countryStateDoc));

export default router;
