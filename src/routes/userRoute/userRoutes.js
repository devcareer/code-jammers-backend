import { Router } from "express";
import passport from "passport";
import userController from "../../controllers/user/user";
import Authentication from "../../middlewares/authenticate";

const router = Router();
const { verifyToken, verifyUserById } = Authentication;

router.post("/users/signup", userController.createUser);
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.patch("/user-profile/", verifyToken, verifyUserById, userController.updateUserProfile);
router.get("/users/signup/verify/:email", userController.verifyUser);
router.post("/users/signin", userController.loginUser);
router.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));
router.get("/auth/facebook/callback",

  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login"
  }));

export default router;
