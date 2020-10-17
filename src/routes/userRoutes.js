import { Router } from "express";
import passport from "passport";
import userController from "../controllers/user";

const router = Router();
router.post("/users/signup", userController.createUser);
router.post("/users/signin", userController.loginUser);
router.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));
router.get("/auth/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  });

export default router;
