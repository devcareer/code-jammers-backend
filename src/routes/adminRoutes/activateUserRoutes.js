import { Router } from "express";
import AdminController from "../../controllers/admin";
import Authentication from "../../middlewares/authenticate";

const router = Router();
const { ActivateUser, DeActivateUser } = AdminController;
const { verifyToken, verifyAdmin } = Authentication;

router.patch("/admin/activate-user/:id", verifyToken, verifyAdmin, ActivateUser);

router.patch("/admin/deactivate-user/:id", verifyToken, verifyAdmin, DeActivateUser);

export default router;
