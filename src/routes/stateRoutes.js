import { Router } from "express";
import AdminStateController from "../controllers/state";
import Authentication from "../middlewares/authenticate";

const {
  addState, listStates, getState, deleteState, updateState
} = AdminStateController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.get("/get-states", listStates);
router.get("/get-state", getState);

router.delete("/delete-state", verifyToken, verifyAdmin, deleteState);
router.put("/update-state", verifyToken, verifyAdmin, updateState);

router.post("/admin/state", verifyToken, verifyAdmin, addState);

export default router;
