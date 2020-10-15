import { Router } from "express";
import passport from "passport";
import userController from "../controllers/user";
import loginController from "../controllers/user-sign-in";

const router = Router();
router.post("/users/signup", userController.createUser);
router.post("/users/signin", loginController.loginUser);

router.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));

export default router;
