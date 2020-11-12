import { Router } from "express";
import userController from "../../controllers/user/user";
import Authentication from "../../middlewares/authenticate";

const router = Router();
const { verifyToken, verifyUserByDetails, verifyUserById } = Authentication;

router.post("/users/signup", userController.createUser);

router.patch("/user-profile/", verifyToken, verifyUserById, userController.updateUserProfile);
router.get("/users/signup/verify/:email", userController.verifyUser);
router.post("/users/signin", verifyUserByDetails, userController.loginUser);

export default router;
