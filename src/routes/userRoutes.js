import { Router } from "express";
import userController from "../controllers/user/user";

const router = Router();

router.post("/users/signup", userController.createUser);

router.patch("/user-profile/:id", userController.updateUserProfile);
router.get("/users/signup/verify/:email", userController.verifyUser);
router.post("/users/signin", userController.loginUser);

export default router;
