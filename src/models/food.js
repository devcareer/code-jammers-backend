<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
  const Culture = sequelize.define("Food", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    countryId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    types: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    methodOfPreparation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  Food.associate = (models) => {
    Food.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
=======
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
>>>>>>> 1d076367683ccf185c802e2823db9540ff0a74a3
  return Food;
};
