module.exports = (sequelize, DataTypes) => {
  const EthnicGroup = sequelize.define("EthnicGroups", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    festivals: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dressing: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    culturalPractices: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  EthnicGroup.associate = models => {
    EthnicGroup.belongsTo(models.Countries, {
      as: "countryEthnicGroup",
      foreignKey: "countryId",
      onDelete: 'cascade',
    });
  };
  return EthnicGroup;
};
