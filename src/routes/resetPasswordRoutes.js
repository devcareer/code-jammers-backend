import { Router } from "express";
import resetPasswordController from "../controllers/resetPasswordController";

const router = Router();
router.post("/users/recover", resetPasswordController.recover);
router.post("/users/reset/:id/:token", resetPasswordController.reset);

export default router;
