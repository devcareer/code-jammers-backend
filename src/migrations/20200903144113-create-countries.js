export default {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize
      .query("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")
      .then(() =>
        queryInterface.createTable("Countries", {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal("uuid_generate_v4()"),
          },
          nameOfCountry: {
            allowNull: false,
            type: Sequelize.ENUM,
            values: [
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
              "Seychelles"
            ],
          },
          gallery: { allowNull: false, type: Sequelize.STRING },
          capital: { allowNull: false, type: Sequelize.STRING },
          population: { allowNull: false, type: Sequelize.INTEGER },
          officialLanguage: { allowNull: false, type: Sequelize.STRING },
          region: { allowNull: false, type: Sequelize.STRING },
          currency: { allowNull: false, type: Sequelize.STRING },
          createdAt: { allowNull: false, type: Sequelize.DATE },
          updatedAt: { allowNull: false, type: Sequelize.DATE },
        }),
      );
  },
  down: queryInterface => queryInterface.dropTable("Countries"),
};
