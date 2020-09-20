<<<<<<< HEAD
export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("Super Admin", "Admin", "User"),
      defaultValue: "user",
    },
  });
  User.associate = models => {
    User.belongsTo(models.Profiles, {
      as: "profileDetails", foreignKey: "userId",
    });
  };
  return User;
};
=======
export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  });
  // User.hasOne(models.Profile, {
  //   onDelete: "cascade",
  // });
  return User;
};
>>>>>>> 07b9634... resolve conflicts
