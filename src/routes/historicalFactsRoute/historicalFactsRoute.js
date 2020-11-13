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

router.get("/historical-fact", getAllHistoricalFacts);
router.get("/historical-fact/:id", getHistoricalFact);
router.get("/historical-fact/location/:location", getHistoricalFactByLocation);
router.post("/admin/historical-fact/:countryId", verifyToken, verifyAdmin, addHistoricalFact);
router.patch("/admin/historical-fact/:id", verifyToken, verifyAdmin, updateHistoricalFact);
router.delete("/admin/historical-fact/:id", verifyToken, verifyAdmin, deleteHistoricalFact);

export default router;
