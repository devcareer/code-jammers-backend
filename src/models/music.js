module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define("Music", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Music.associate = models => {
    Music.belongsTo(models.Countries, {
      as: "country",
      foreignKey: "countryId",
    });
  };
  return Music;
};
