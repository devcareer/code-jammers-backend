import { Router } from "express";
import userController from "../controllers/user";

const router = Router();
<<<<<<< HEAD
router.post("/users/signup", userController.createUser);
=======

router.post("/", userController.createUser);
>>>>>>> 283f3f5... resolve conflict

export default router;
