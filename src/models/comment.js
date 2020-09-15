module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comments", {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Comment.associate = models => {
    Comment.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
      onDelete: "cascade",
    });
  };
  return Comment;
};
