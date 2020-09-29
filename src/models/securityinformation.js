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
    about: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Securityinformation.associate = models => {
    Securityinformation.belongsTo(models.Countries, {
      as: "countrySecurityInformation",
      foreignKey: "countryId",
    });
  };
  return Securityinformation;
};
