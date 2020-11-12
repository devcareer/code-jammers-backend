import { Router } from "express";
import AdminController from "../../controllers/admin";
import Authentication from "../../middlewares/authenticate";

const router = Router();
const { ActivateUser, DeActivateUser } = AdminController;
const { verifyToken } = Authentication;

router.patch("/activate-user/:id", verifyToken, ActivateUser);

router.patch("/deactivate-user/:id", verifyToken, DeActivateUser);

export default router;
