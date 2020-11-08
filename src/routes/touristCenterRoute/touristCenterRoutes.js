import Router from "express";
import touristCenterController from "../../controllers/touristCenter/touristCenter";
import Authentication from "../../middlewares/authenticate";

// eslint-disable-next-line max-len
const {
  getAllTouristCenters, getTouristCenter, addTouristCenter, updateTouristCenter, deleteTouristCenter
} = touristCenterController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();

router.get("/tourist-center/:id", getTouristCenter);
router.get("/tourist-centers", getAllTouristCenters);
router.post("/admin/tourist-center/:countryId", verifyToken, verifyAdmin, addTouristCenter);
router.patch("/admin/tourist-center/:id", verifyToken, verifyAdmin, updateTouristCenter);
router.delete("/admin/tourist-center/:id", verifyToken, verifyAdmin, deleteTouristCenter);

export default router;
