import { Router } from "express";
import userController from "../controllers/user";

const router = Router();
<<<<<<< HEAD
<<<<<<< HEAD
router.post("/users/signup", userController.createUser);
=======

router.post("/", userController.createUser);
>>>>>>> 283f3f5... resolve conflict
=======
console.log(userController.createUser);
router.post("/users/signup", userController.createUser);
>>>>>>> 703912e... comit msg

export default router;
