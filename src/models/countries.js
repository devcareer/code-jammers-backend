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
    Country.hasMany(models.Cultures, {
      foreignKey: "countryId",
    });

    Country.hasMany(models.States, {
      as: "states",
      foreignKey: "countryId",
    });

    Country.hasMany(models.TouristCenters, {
      as: "touristCenters",
      foreignKey: "countryId",
    });
  };

  return Country;
};
