module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("Countries", {
    nameOfCountry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    officialLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Country.associate = models => {
    Country.hasMany(models.EthnicGroups, {
      as: "ethnicGroups",
      foreignKey: "countryId",
      onDelete: "cascade",
      hooks: true,
    });

    Country.hasMany(models.Foods, {
      as: "Food",
      foreignKey: "countryId",
      onDelete: "cascade",
      hooks: true,
    });

    Country.hasMany(models.States, {
      as: "states",
      foreignKey: "countryId",
      onDelete: "cascade",
      hooks: true,
    });

    Country.hasMany(models.TouristCenters, {
      as: "touristCenters",
      foreignKey: "countryId",
      onDelete: "cascade",
      hooks: true,
    });

    Country.hasMany(models.Historicalfacts, {
      as: "historicalFacts",
      foreignKey: "countryId",
      onDelete: "cascade",
      hooks: true,
    });

    Country.hasMany(models.Music, {
      as: "music",
      foreignKey: "countryId",
    });

    Country.hasMany(models.Comments, {
      as: "comments",
      foreignKey: "relatedId",
      onDelete: 'cascade',
      hooks: true, 
    });
  };



  return Country;
};
