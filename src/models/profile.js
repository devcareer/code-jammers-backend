<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const Profile = sequelize.define("Profiles", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
=======
=======
export default (sequelize, DataTypes) => {
>>>>>>> eeefdaf... fix JWT
  const Profile = sequelize.define("Profile", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
>>>>>>> de8b767... add profile and user model
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
<<<<<<< HEAD
<<<<<<< HEAD
  Profile.associate = models => {
<<<<<<< HEAD
    Profile.belongsTo(models.Users, {
=======
    Profile.belongsTo(models.User, {
>>>>>>> e6f281f... resolve merge conflict
      as: "profileDetails", foreignKey: "userId",
    });
  };
=======
  // Profile.associate = models => {
  //   Profile.belongsTo(models.User, {
  //     as: "profileDetails", foreignKey: "userId",
  //   });
  // };
>>>>>>> 1bb0234... rebase develop
=======
>>>>>>> de8b767... add profile and user model
=======
  Profile.associate = models => {
    Profile.belongsTo(models.User, {
      as: "profileDetails", foreignKey: "userId",
    });
  };
>>>>>>> eeefdaf... fix JWT
  return Profile;
};
