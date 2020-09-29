import Router from "express";
import "./userRoutes";
import controllers from "../controllers";

const { resetPasswordController } = controllers;

const { recover, reset } = resetPasswordController;

const router = Router();

router.post("/reset-request", recover);
router.post("/reset-password/:id/:token", reset);

export default router;
