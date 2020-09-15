module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Profile.associate = models => {
    Profile.belongsTo(models.User, {
      as: "profileDetails", foreignKey: "userId",
    });
  };
  return Profile;
};
