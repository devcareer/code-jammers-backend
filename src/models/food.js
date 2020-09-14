module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define("Food", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
    },
    types: {
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
  Food.associate = (models) => {
    Food.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Food;
};

