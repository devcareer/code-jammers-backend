import { Router } from "express";
import passport from "passport";
import userController from "../controllers/user";
import loginController from "../controllers/user-sign-in";
import { FacebookStrategy } from "../database/config/facebookpassport";

const router = Router();
router.post("/users/signup", userController.createUser);
router.post("/users/signin", loginController.loginUser);

router.get("/auth/facebook", passport.authenticate("facebook", { FacebookStrategy }, {

}));

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/fail"
  })
);

router.get("/fail", (req, res) => {
  res.send("Failed attempt");
});

router.get("/", (req, res) => {
  res.send("Success");
});
export default router;
