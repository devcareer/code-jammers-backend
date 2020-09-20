export default (sequelize, DataTypes) => {
  const Country = sequelize.define("Countries", {
    nameOfCountry: {
      type: DataTypes.ENUM(
        "Nigeria",
        "Ethiopia",
        "Egypt",
        "Democratic Republic of the Congo",
        "Tanzania",
        "South Africa",
        "Kenya",
        "Uganda",
        "Algeria",
        "Sudan",
        "Morocco",
        "Mozambique",
        "Ghana",
        "Angola",
        "Somalia",
        "Ivory Coast",
        "Madagascar",
        "Cameroon",
        "Burkina Faso",
        "Niger",
        "Malawi",
        "Zambia",
        "Mali",
        "Senegal",
        "Zimbabwe",
        "Chad",
        "Tunisia",
        "Guinea",
        "Rwanda",
        "Benin",
        "Burundi",
        "South Sudan",
        "Eritrea",
        "Sierra Leone",
        "Togo",
        "Libya",
        "Central African Republic",
        "Mauritania",
        "Republic of the Congo",
        "Liberia",
        "Namibia",
        "Botswana",
        "Lesotho",
        "Gambia",
        "Gabon",
        "Guinea-Bissau",
        "Mauritius",
        "Equatorial Guinea",
        "Eswatini",
        "Djibouti",
        "Réunion (France)",
        "Comoros",
        "Cape Verde",
        "Mayotte (France)",
        "São Tomé and Príncipe",
        "Seychelles",
      ),
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
      as: "cultureCountry",
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
