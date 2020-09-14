module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false 
    },
    role: {
      type: DataTypes.ENUM("Super Admin", "Admin", "User"),
      defaultValue: "user",
    },
  });
  User.associate = models => {
    User.belongsTo(models.Profile, {
      as: "profileDetails", foreignKey: "userId",
    });
  };
  return User;
};
