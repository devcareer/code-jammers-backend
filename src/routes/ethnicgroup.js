import { Router } from "express";
import Authentication from "../middlewares/authenticate";
import EthnicGroups from "../controllers/ethnicGroup";

const {
  getAllEthnicGroups,
  getEthnicGroupById,
  deleteEthnicGroupById,
  createEthnicGroup,
  updateEthnicGroupById
} = EthnicGroups;

const { verifyAdmin, verifyToken } = Authentication;

const router = Router();
router.delete("/admin/ethnic-group/:id", verifyToken, verifyAdmin, deleteEthnicGroupById);
router.post("/admin/ethnic-group/:countryId", verifyToken, verifyAdmin, createEthnicGroup);
router.patch("/admin/ethnic-group/:id", verifyToken, verifyAdmin, updateEthnicGroupById);
router.get("/ethnic-groups", getAllEthnicGroups);
router.get("/ethnic-group/:id", getEthnicGroupById);
export default router;
