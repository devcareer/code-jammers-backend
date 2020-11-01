import { Router } from "express";
import AdminStateController from "../controllers/state";
import Authentication from "../middlewares/authenticate";

const {
  listStates, getState, addState, deleteState, updateState
} = AdminStateController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();

router.get("/states", listStates);
router.get("/state/:id", getState);
router.delete("/admin/state/:id", verifyToken, verifyAdmin, deleteState);
router.patch("/admin/state/:id", verifyToken, verifyAdmin, updateState);
router.post("/admin/state/:countryId", verifyToken, verifyAdmin, addState);

export default router;
