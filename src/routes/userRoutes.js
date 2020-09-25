import { Router } from "express";
import userController from "../controllers/user";

const router = Router();
router.post("/users/signup", userController.createUser);

router.put("/users/:id/edit", userController.updateUserProfile);

export default router;
