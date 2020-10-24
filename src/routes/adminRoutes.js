import { Router } from "express";
import AdminController from "../controllers/country";
import AdminStateController from "../controllers/state";
import Authentication from "../middlewares/authenticate";

const { addCountry } = AdminController;
const { addState } = AdminStateController;
const { listStates } = AdminStateController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.get("/get-state", listStates);

router.post("/admin/country", verifyToken, verifyAdmin, addCountry);
router.post("/admin/state", verifyToken, verifyAdmin, addState);

export default router;
