module.exports = (sequelize, DataTypes) => {
  const Culture = sequelize.define("Culture", {
    types: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    festivals: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dressing: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tribe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Culture.associate = (models) => {
    Culture.belongsTo(models.Country, {
      as: "countryDetails",
      foreignKey: "countryId",
    });
  };

  return Culture;
};
