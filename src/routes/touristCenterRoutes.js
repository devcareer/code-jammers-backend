import Router from "express";
import touristCenterController from "../controllers/touristCenterController";

const { getAllTouristCenters, getTouristCenter } = touristCenterController;
const router = Router();

router.get("/get-tourist-center", getTouristCenter);
router.get("/get-tourist-centers", getAllTouristCenters);


export default router;