const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class touristCenter extends Model {
    static associate(models) {
      this.belongsTo(models.Country, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  touristCenter.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      gallary: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "touristCenter",
    },
  );
  return touristCenter;
};
