import { Router } from "express";
import userController from "../controllers/user";

const router = Router();
<<<<<<< HEAD
=======
console.log(userController.createUser);
>>>>>>> 07b9634... resolve conflicts
router.post("/users/signup", userController.createUser);

export default router;
