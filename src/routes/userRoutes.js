import { Router } from "express";
import userController from "../controllers/user";
import loginController from "../controllers/user-sign-in";

const router = Router();
router.post("/users/signup", userController.createUser);
router.post("/users/signin", loginController.loginUser);

export default router;
