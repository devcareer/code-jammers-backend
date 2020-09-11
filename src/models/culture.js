export default (sequelize, DataTypes) => {
  const Culture = sequelize.define("Culture", {
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

  return Culture;
};
