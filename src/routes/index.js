import { Router } from "express";

import stateRoutes from "./stateRoutes";
import resetPasswordRoutes from "./resetPasswordRoutes";
import userRoutes from "./userRoute/userRoutes";
import touristCenterRoutes from "./touristCenterRoute/touristCenterRoutes";
import newsletterRoutes from "./newsletterRoute/newsletterRoutes";
import ethnicRoutes from "./ethnicgroup";
import musicRoutes from "./musicRoutes";
import countryRoutes from "./countryRoute/countryRoutes";
import foodRoutes from "./foodRoute/foodRoutes";
import historicalFactsRoutes from "./historicalFactsRoute/historicalFactsRoute";
import commentRoutes from "./commentRoutes";
import adminRoutes from "./adminRoutes/activateUserRoutes";

const router = new Router();

router.use("/", adminRoutes);
router.use("/", countryRoutes);
router.use("/", ethnicRoutes);
router.use("/", userRoutes);
router.use("/", stateRoutes);
router.use("/", touristCenterRoutes);
router.use("/", newsletterRoutes);
router.use("/", resetPasswordRoutes);
router.use("/", musicRoutes);
router.use("/", foodRoutes);
router.use("/", historicalFactsRoutes);
router.use("/", commentRoutes);

export default router;
