import Router from "express";
import historicalFactsController from "../controllers/historicalFacts/historicalFacts";
import Authentication from "../middlewares/authenticate";

// eslint-disable-next-line max-len
const {
  getAllHistoricalFact, getHistoricalFact, addHistoricalFact, updateHistoricalFact, deleteHistoricalFact
} = historicalFactsController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();

router.get("/historicalFact/:id", getHistoricalFact);
router.get("/historicalFact", getAllHistoricalFact);
router.post("/admin/historicalFact/:countryId", verifyToken, verifyAdmin, addHistoricalFact);
router.patch("/admin/historicalFact/:id", verifyToken, verifyAdmin, updateHistoricalFact);
router.delete("/admin/historicalFact/:id", verifyToken, verifyAdmin, deleteHistoricalFact);

export default router;