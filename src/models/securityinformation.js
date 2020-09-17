module.exports = (sequelize, DataTypes) => {
  const Securityinformation = sequelize.define("Securityinformations", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Securityinformation.associate = models => {
    Securityinformation.belongsTo(models.Country, {
      as: "countrySecurityInformation",
      foreignKey: "countryId",
    });
  };
  return Securityinformation;
};
