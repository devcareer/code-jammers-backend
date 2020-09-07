module.exports = (sequelize, DataTypes) => {
  const Culture = sequelize.define("Culture", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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

  Culture.associate = (models) => {
    Culture.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Culture;
};
