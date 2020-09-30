import { Router } from "express";
import userController from "../controllers/user";
import loginController from "../controllers/user-sign-in";

const router = Router();
router.post("/users/signup", userController.createUser);
router.get("/users/signup/verify/:token", userController.verifyUser);
router.post("/users/signin", userController.loginUser);

export default router;
