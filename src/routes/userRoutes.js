import { Router } from "express";
import passport from "passport";
import userController from "../controllers/user";

const router = Router();
router.post("/users/signup", userController.createUser);
router.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
})); 
router.post("/users/signin", userController.loginUser);

export default router;
