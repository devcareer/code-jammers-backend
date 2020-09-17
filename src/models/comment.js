const {
  Model,
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });

      this.belongsTo(models.Country, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Comment.init({
    userId: DataTypes.UUID,
    countryId: DataTypes.UUID,
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: "Comment",
  });
  return Comment;
};
