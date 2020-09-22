<<<<<<< HEAD
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
  Profile.associate = models => {
    Profile.belongsTo(models.Users, {
      as: "profileDetails", foreignKey: "userId",
    });
  };
  return Profile;
};
=======
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
  Profile.associate = models => {
    Profile.belongsTo(models.Users, {
      as: "profileDetails", foreignKey: "userId",
    });
  };
  return Profile;
};
>>>>>>> b28d60a... feature(get country routes): create get country routes
