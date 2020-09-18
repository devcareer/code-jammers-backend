module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const Securityinformation = sequelize.define("Securityinformations", {
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
