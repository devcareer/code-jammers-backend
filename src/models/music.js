<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
  const Culture = sequelize.define("Music", {
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
  return Food;
=======
const {
  Model,
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Music.init({
    id: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    gallery: DataTypes.STRING,
    event: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Music",
  });
  return Music;
>>>>>>> 1d076367683ccf185c802e2823db9540ff0a74a3
};
