import { Router } from "express";
import passport from "passport";
import userController from "../../controllers/user/user";

const router = Router();

router.post("/users/signup", userController.createUser);
router.get("/users/signup/verify/:email", userController.verifyUser);
router.post("/users/signin", userController.loginUser);
router.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));
router.get("/auth/facebook/callback", passport.authenticate("facebook", { successRedirect: "/", failureRedirect: "/fail" }),
  (req, res) => {
    res.redirect("/");
  });

export default router;
