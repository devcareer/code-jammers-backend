module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const Securityinformation = sequelize.define("Securityinformation", {
=======
  const Securityinformation = sequelize.define("Securityinformations", {
>>>>>>> 86cdcdb... lint code
=======
  const Securityinformation = sequelize.define("Securityinformation", {
>>>>>>> 92567b9... install sinon, remove plural tables
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
=======
>>>>>>> 080040d... feat(models): Design historical & security models
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
<<<<<<< HEAD
=======
>>>>>>> 86cdcdb... lint code

  Securityinformation.associate = (models) => {
    Securityinformation.belongsTo(models.Country, {
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
=======

	Securityinformation.associate = (models) => {
		Securityinformation.belongsTo(models.Countries, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	return Securityinformation;
>>>>>>> 080040d... feat(models): Design historical & security models
};
