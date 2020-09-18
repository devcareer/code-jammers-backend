module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const Securityinformation = sequelize.define("Securityinformations", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
=======
=======
>>>>>>> 035a52d... resolve all conflict
  const Securityinformation = sequelize.define("Securityinformations", {
=======
  const Securityinformation = sequelize.define("Securityinformation", {
>>>>>>> eb31de8... resolve all conflict
    countryId: {
      type: DataTypes.STRING,
      allowNull: false,
>>>>>>> 1b580f5... lint code
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
<<<<<<< HEAD

  Securityinformation.associate = models => {
    Securityinformation.belongsTo(models.Country, {
      as: "countrySecurityInformation",
      foreignKey: "countryId",
    });
  };

  return Securityinformation;
=======
	const Securityinformation = sequelize.define("Securityinformations", {
		countryId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
=======
>>>>>>> 1b580f5... lint code

  Securityinformation.associate = (models) => {
    Securityinformation.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

<<<<<<< HEAD
	return Securityinformation;
>>>>>>> dff23cc... rebase develop
=======
  return Securityinformation;
>>>>>>> 1b580f5... lint code
};
