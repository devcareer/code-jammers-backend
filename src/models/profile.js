module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profiles", {
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  // Profile.associate = models => {
  //   Profile.belongsTo(models.User, {
  //     as: "profileDetails", foreignKey: "userId",
  //   });
  // };
=======
>>>>>>> 97eeae8... fix conflicts
  Profile.associate = models => {
    Profile.belongsTo(models.Users, {
      as: "profileDetails", foreignKey: "userId",
    });
  };
<<<<<<< HEAD
=======
>>>>>>> eeefdaf... fix JWT
=======
  Profile.associate = models => {
    Profile.belongsTo(models.Users, {
      as: "profileDetails", foreignKey: "userId",
    });
  };
>>>>>>> 30aa778... fix undefined error
>>>>>>> 97eeae8... fix conflicts
  return Profile;
};
