module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const Securityinformation = sequelize.define("Securityinformation", {
=======
  const Securityinformation = sequelize.define("Securityinformations", {
>>>>>>> 86cdcdb... lint code
    countryId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
<<<<<<< HEAD

  Securityinformation.associate = (models) => {
    Securityinformation.belongsTo(models.Country, {
<<<<<<< HEAD
      as: "countrySecurityInformation",
      foreignKey: "countryId",
=======
      foreignKey: {
        allowNull: false,
      },
>>>>>>> 020be84... rebase develop
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
>>>>>>> 86cdcdb... lint code

  Securityinformation.associate = (models) => {
    Securityinformation.belongsTo(models.Countries, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

<<<<<<< HEAD
	return Securityinformation;
>>>>>>> 060c3e6... resolve conflict
=======
  return Securityinformation;
>>>>>>> 86cdcdb... lint code
};
