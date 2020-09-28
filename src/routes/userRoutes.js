import { Router } from "express";
import passport from "passport";
import userController from "../controllers/user";
import loginController from "../controllers/user-sign-in";
import fbStrategy from "../database/config/facebookpassport";

const router = Router();
router.post("/users/signup", userController.createUser);
router.post("/users/signin", loginController.loginUser);

router.get("/auth/facebook", passport.authenticate("facebook", fbStrategy, {
  scope: ["profile", "email"]
}));

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", fbStrategy, { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
export default router;
