import { Router } from "express";
import passport from "passport";
import userController from "../../controllers/user/user";
import Authentication from "../../middlewares/authenticate";

const router = Router();
const { verifyToken, verifyUserById } = Authentication;

router.post("/users/signup", userController.createUser);
router.get(
  "/auth/google/signup",
  passport.authenticate("googleSignUp", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/auth/google/signin",
  passport.authenticate("googleSignIn", {
    scope: ["profile", "email"],
  })
);

router.patch("/user-profile/", verifyToken, verifyUserById, userController.updateUserProfile);
router.get("/users/signup/verify/:email", userController.verifyUser);
router.post("/users/signin", userController.loginUser);

export default router;
