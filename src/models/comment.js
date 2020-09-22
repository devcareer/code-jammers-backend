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
  });

  Comment.associate = models => {
    Comment.belongsTo(models.Users, {
      as: "user",
      foreignKey: "userId",
      onDelete: "cascade",
    });
  };
  return Comment;
};
