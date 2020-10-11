import { Router } from "express";
import userController from "../controllers/user/user";

const router = Router();
router.post("/users/signup", userController.createUser);
router.post("/users/signin", userController.loginUser);

export default router;
