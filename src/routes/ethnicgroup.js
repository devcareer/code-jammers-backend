import { Router } from "express";
import Authentication from "../middlewares/authenticate";
import EthnicGroups from "../controllers/ethnicGroup";

const {
  getByCountryId, getAll, deleteById, createEthnicGroup, getById, updateById
} = EthnicGroups;

const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.delete("/admin/ethnic-group/:id", verifyToken, verifyAdmin, deleteById);
router.post("/admin/ethnic-group/:countryId", verifyToken, verifyAdmin, createEthnicGroup);
router.patch("/admin/ethnic-group/:id", verifyToken, verifyAdmin, updateById);
router.get("/ethnic-groups", getAll);
router.get("/ethnic-group/:id", getById);
export default router;
