module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define("Musics", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
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
  Music.associate = models => {
    Music.belongsTo(models.Country, {
      as: "country",
      foreignKey: "countryId",
    });
  };
  return Music;
};
