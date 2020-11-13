import Router from "express";
import historicalFact from "../../controllers/historicalFacts/historicalFacts";
import Authentication from "../../middlewares/authenticate";

// eslint-disable-next-line max-len
const {
  getAllHistoricalFacts,
  getHistoricalFact,
  getHistoricalFactByLocation,
  addHistoricalFact,
  updateHistoricalFact,
  deleteHistoricalFact
} = historicalFact;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();

router.get("/historicalFact", getAllHistoricalFacts);
router.get("/historicalFact/:id", getHistoricalFact);
router.get("/historicalFact/byLocation/:location", getHistoricalFactByLocation);
router.post("/admin/historicalFact/:countryId", verifyToken, verifyAdmin, addHistoricalFact);
router.patch("/admin/historicalFact/:id", verifyToken, verifyAdmin, updateHistoricalFact);
router.delete("/admin/historicalFact/:id", verifyToken, verifyAdmin, deleteHistoricalFact);

export default router;
