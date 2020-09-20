import { Router } from "express";
import userController from "../controllers/user";

const router = Router();
<<<<<<< HEAD
=======
console.log(userController.createUser);
>>>>>>> c7f7c44... resolve conflicts
router.post("/users/signup", userController.createUser);

export default router;
