import { Router } from "express";
import AdminStateController from "../controllers/state";

const { listStates, getState } = AdminStateController;

const router = Router();
router.get("/get-states", listStates);
router.get("/get-state", getState);

export default router;
