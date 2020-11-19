import database from "../../models";

/**
 * @class Food
 * @description Food services
 * @exports Food
 */
export default class FoodServices {
  /**
   * @param {string} foodDetails - Details used to create a food
   * @returns {object} - An instance of the Foods model class
   */
  static async addFood(foodDetails) {
    try {
      return await database.Foods.create(foodDetails);
    } catch (error) {
      return error;
    }
  }

  /**
   * @param {string} id - Id of foods
   * @returns {object} - An instance of the Foods model class
   */
  static async getOneFoodById(id) {
    try {
      return await database.Foods.findOne({
        where: { id }, include: [{ model: database.Comments, as: "comments" }]
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @param {string} id - Id of foods
   * @param {string} foodDetails - Details with which to update specific food
   * @returns {object} - An instance of the Foods model class
   */
  static async updateFood(id, foodDetails) {
    try {
      const findFood = await database.Foods.findOne({
        where: { id }
      });
      if (findFood) {
        return await database.Foods.update(foodDetails,
          {
            where: { id: findFood.id },
            returning: true,
            plain: true
          });
      }
    } catch (error) {
      return error;
    }
  }

  /**
   * @param {string} getFood - Details of food to delete
   * @returns {object} - An instance of the Foods model class
   */
  static async deleteFood(getFood) {
    try {
      return database.Foods.destroy({
        getFood,
        where: { id: getFood.id }
      });
    } catch (error) {
      throw error;
    }
  }
}
