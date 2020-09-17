<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profiles", {
=======
export default (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile", {
>>>>>>> eeefdaf... fix JWT
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
  // Profile.associate = models => {
  //   Profile.belongsTo(models.User, {
  //     as: "profileDetails", foreignKey: "userId",
  //   });
  // };
=======
  Profile.associate = models => {
    Profile.belongsTo(models.User, {
      as: "profileDetails", foreignKey: "userId",
    });
  };
>>>>>>> eeefdaf... fix JWT
  return Profile;
};
