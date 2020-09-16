<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define("Music", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  Music.associate = models => {
    Music.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Music;
};
=======
module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define("Music", {
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Countries",
        key: "id",
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  Music.associate = (models) => {
    Music.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Music;
};
>>>>>>> 523ffd3... make corrections
