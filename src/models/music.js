module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define("Music", {
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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  Music.associate = (models) => {
    Music.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Music;
};

