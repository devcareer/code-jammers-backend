import { Router } from "express";
import userController from "../controllers/user";
import Authentication from "../middlewares/authenticate";

const router = Router();
const { verifyToken } = Authentication;

router.post("/users/signup", userController.createUser);

router.patch("/user-profile/", verifyToken, userController.updateUserProfile);
router.get("/users/signup/verify/:email", userController.verifyUser);
router.post("/users/signin", userController.loginUser);

export default router;
