import { Router } from "express";

import userDocs from "../../../docs/userDoc.json";
import newsletterDocs from "../../../docs/newsletterDoc.json";
import newsletter2 from "../../../docs/Fiyin-Anne-Know-Africa-Newsletter-1.0-swagger.json";

const swaggerUi = require("swagger-ui-express");

const router = Router();

router.get("/user", swaggerUi.setup(userDocs));
router.get("/newsletter", swaggerUi.setup(newsletterDocs));
// router.get("/newsletter2", swaggerUi.setup(newsletter2));

export default router;
