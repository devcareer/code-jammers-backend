import { Router } from "express";
import resetPasswordController from "../controllers/resetPasswordController";
import Authentication from "../middlewares/authenticate";

const { verifyUserByDetails } = Authentication;

const router = Router();
router.post("/users/recover", verifyUserByDetails, resetPasswordController.recover);
router.post("/users/reset/:id/:token", resetPasswordController.reset);

export default router;
