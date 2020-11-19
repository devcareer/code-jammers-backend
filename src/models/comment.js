module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comments", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    relatedId: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Comment.associate = models => {
    Comment.belongsTo(models.Users, {
      as: "user",
      foreignKey: "userId",
      onDelete: "cascade",
    });
    Comment.belongsTo(models.Countries, {
      as: "countryComment",
      foreignKey: "relatedId",
      onDelete: "cascade",
    });

    Comment.belongsTo(models.TouristCenters, {
      as: "touristCenterComment",
      foreignKey: "relatedId",
      onDelete: "cascade",
    });
    Comment.belongsTo(models.EthnicGroups, {
      as: "ethnicGroupComment",
      foreignKey: "relatedId",
      onDelete: "cascade",
    });
    Comment.belongsTo(models.Foods, {
      as: "foodComment",
      foreignKey: "relatedId",
      onDelete: "cascade",
    });
    Comment.belongsTo(models.Historicalfacts, {
      as: "historicalFactsComment",
      foreignKey: "relatedId",
      onDelete: "cascade",
    });
    Comment.belongsTo(models.Music, {
      as: "musicComment",
      foreignKey: "relatedId",
      onDelete: "cascade",
    });
  };
  return Comment;
};
