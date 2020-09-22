module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define("Foods", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    methodOfPreparation: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Food.associate = models => {
    Food.belongsTo(models.Countries, {
      as: "country",
      foreignKey: "countryId",
    });
  };
  return Food;
};
