<<<<<<< HEAD
<<<<<<<< HEAD:src/models/User.js
export default (sequelize, DataTypes) => {
  const User = sequelize.define("Users", {
=======
export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
>>>>>>> c7f7c44... resolve conflicts
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
<<<<<<< HEAD
=======
      validate: {
        isEmail: true,
      },
>>>>>>> c7f7c44... resolve conflicts
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
<<<<<<< HEAD
      type: DataTypes.ENUM("Super Admin", "Admin", "User"),
      defaultValue: "User",
    },
  });
  return User;
};
========
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
>>>>>>>> c7f7c44... resolve conflicts:src/models/user.js
=======
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  });
  // User.hasOne(models.Profile, {
  //   onDelete: "cascade",
  // });
  return User;
};
>>>>>>> c7f7c44... resolve conflicts
