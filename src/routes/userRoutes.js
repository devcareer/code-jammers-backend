import { Router } from "express";
import userController from "../controllers/user";

const router = Router();
router.post("/users/signup", userController.createUser);

router.put("/users/:id/edit", userController.updateUserProfile);
router.get("/users/signup/verify/:email", userController.verifyUser);
router.post("/users/signin", userController.loginUser);

export default router;
