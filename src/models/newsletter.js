module.exports = (sequelize, DataTypes) => {
  const Newsletter = sequelize.define("Newsletter", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
