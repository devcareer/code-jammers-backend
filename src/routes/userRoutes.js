import { Router } from "express";
import userController from "../controllers/user";

const router = Router();
router.post("/users/signup", userController.createUser);
router.post("/users/signin", userController.loginUser);
router.put("/users/:id/makeAdmin", userController.updateUserRole);

export default router;
