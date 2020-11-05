import { Router } from "express";
import Food from "../../controllers/food/food";
import Authentication from "../../middlewares/authenticate";

const {
  createFood,
  getFoodsByCountry,
  getAllFoods,
  getOneFoodById,
  updateFood,
  deleteFood
} = Food;
const { verifyAdmin, verifyToken } = Authentication;
const router = Router();
router.post("/admin/food", verifyToken, verifyAdmin, createFood);
router.patch("/admin/food/:id", verifyToken, verifyAdmin, updateFood);
router.delete("/admin/food/:id", verifyToken, verifyAdmin, deleteFood);
router.get("/food", getAllFoods);
router.get("/food/country-foods/:country", getFoodsByCountry);
router.get("/food/:id", getOneFoodById);

export default router;
