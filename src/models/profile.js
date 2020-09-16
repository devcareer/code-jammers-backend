export default (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
