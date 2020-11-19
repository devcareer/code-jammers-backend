import { Router } from "express";
import docs from "../../../docs/docs.json";

const swaggerUi = require("swagger-ui-express");

const router = Router();

router.get("/docs", swaggerUi.setup(docs));

export default router;
