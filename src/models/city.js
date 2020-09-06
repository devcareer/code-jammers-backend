const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      this.belongsTo(models.Country, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }

  City.init(
    {
      name: DataTypes.STRING,

      location: DataTypes.STRING,

      gallary: DataTypes.STRING,
    },
    {
      sequelize,

      modelName: "City",
    },
  );

  return City;
};
