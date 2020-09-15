module.exports = (sequelize, DataTypes) => {
  const Newsletter = sequelize.define("Newsletters", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Newsletter;
};
