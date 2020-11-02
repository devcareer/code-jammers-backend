import { Router } from "express";
import AdminController from "../controllers/country";
import Authentication from "../middlewares/authenticate";
import EthnicGroups from "../controllers/ethnicGroup";

const {
  getByCountryId, getAll, deleteById, createEthnicGroup
} = EthnicGroups;

const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.delete("/admin/ethnic-groups/:id", verifyToken, verifyAdmin, deleteById);
router.post("/admin/ethnic-group", verifyToken, verifyAdmin, createEthnicGroup);
router.get("/ethnic-groups", getAll);
router.get("/ethnic-group/:countryId", getByCountryId);

export default router;
