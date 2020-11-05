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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    information: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    gallery: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: false,
    },
  });
  Music.associate = models => {
    Music.belongsTo(models.Countries, {
      as: "country",
      foreignKey: "countryId",
    });

    Music.hasMany(models.Comments, {
      as: "comments",
      foreignKey: "relatedId",
      onDelete: 'cascade',
      hooks: true, 
    });
  };
  return Music;
};
