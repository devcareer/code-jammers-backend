import { Router } from "express";
import userController from "../controllers/user";

const router = Router();
router.post("/users/signup", userController.createUser);

router.put("/users/:id/edit", userController.updateUserProfile);
router.post("/users/signin", userController.loginUser);

export default router;
