import { Router } from "express";
import userController from "../controllers/user";

const router = Router();
console.log(userController.createUser);
router.post("/users/signup", userController.createUser);

export default router;
