const {
  Model,
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Food.init({
    id: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    gallery: DataTypes.STRING,
    event: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Food",
  });
  return Food;
};
