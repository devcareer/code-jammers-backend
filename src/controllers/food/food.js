import Admin from "../../services/AdminServices/countryService";
import FoodServices from "../../services/foodServices/food";
import database from "../../models";
import { foodValidation } from "../../validation/foodValidation";
import { validateId } from "../../validation/touristCenterValidation";

/**
 * @class Food
 * @description create food, update food, get all foods, get foodsByCountry,
 *  get one food, delete food
 * @exports Food
 */
export default class Food {
  /**
   * @param {object} req - The createFood request object
   * @param {object} res - The createFood response object
   * @returns {object} Success message
   */
  static async createFood(req, res) {
    try {
      const {
        foodName, methodOfPreparation, gallery
      } = req.body;
      const { countryId } = req.params;
      const { error } = foodValidation({
        countryId,
        foodName,
        methodOfPreparation,
        gallery
      });
      if (error) {
        return res.status(400).json({ status: 400, error: error.message });
      }
      const findCountry = await Admin.checkCountryById(countryId);
      if (findCountry) {
        const foodDetails = {
          countryId: findCountry.id,
          type: foodName,
          methodOfPreparation,
          gallery
        };
        const newFood = await FoodServices.addFood(foodDetails);
        return res.status(201).json({ status: 201, message: "Food created!", data: newFood });
      }
      return res.status(404).json({ status: 404, error: "Country Not Found" });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The getFoodsByCountry request object
   * @param {object} res - The getFoodsByCountry response object
   * @returns {object} Success message
   */
  static async getOneFoodById(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const getFood = await FoodServices.getOneFoodById(id);
      if (!getFood) return res.status(404).json({ status: 404, error: "Food does not exist" });
      return res.status(200).json({ status: 200, message: "Food found!", data: getFood });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The getFoodsByCountry request object
   * @param {object} res - The getFoodsByCountry response object
   * @returns {object} Success message
   */
  static async getAllFoods(req, res) {
    try {
      const getFoods = await database.Foods.findAll();
      return res.status(200).json({ status: 200, message: "All foods retrieved successfully", data: getFoods });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The getFoodsByCountry request object
   * @param {object} res - The getFoodsByCountry response object
   * @returns {object} Success message
   */
  static async updateFood(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const {
        foodName,
        methodOfPreparation,
        gallery
      } = req.body;
      const foodToUpdate = await FoodServices.getOneFoodById(id);
      if (foodToUpdate) {
        const foodDetails = {
          type: foodName,
          methodOfPreparation,
          gallery
        };
        const updateFood = await FoodServices.updateFood(id, foodDetails);
        return res.status(200).json({ status: 200, message: "Food updated successfully", data: updateFood });
      }
      return res.status(404).json({ status: 404, error: "Food not found" });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The getFoodsByCountry request object
   * @param {object} res - The getFoodsByCountry response object
   * @returns {object} Success message
   */
  static async deleteFood(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const getFood = await FoodServices.getOneFoodById(id);
      if (!getFood) return res.status(404).json({ status: 404, error: "Food not found" });
      const foodToDelete = await FoodServices.deleteFood(getFood);
      return res.status(200).json({ status: 200, message: "Food deleted successfully" });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }
}
