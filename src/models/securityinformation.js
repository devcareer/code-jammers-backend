module.exports = (sequelize, DataTypes) => {
  const Securityinformation = sequelize.define("Securityinformation", {
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
};
