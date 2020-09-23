import { Router } from "express";
import userController from "../controllers/user";
import loginController from "../controllers/user-sign-in";

const router = Router();
router.post("/users/signup", userController.createUser);
router.post("/users/signin", loginController.loginUser);

router.route('/auth/facebook')
.post(passport.authenticate('facebook', {section:false}), facebookController.facebookOAuth);

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

export default router;
