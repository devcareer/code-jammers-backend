module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.createTable("Hisoricalfact", {
=======
    await queryInterface.createTable("Hisoricalfacts", {
>>>>>>> lint code
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      countryId: {
        type: Sequelize.INTEGER,
      },
      location: {
        type: Sequelize.STRING,
      },
      gallery: {
        type: Sequelize.STRING,
      },
      // countryId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   allowNull: false,
      //   references: {
<<<<<<< HEAD
      //     model: "Country",
=======
      //     model: "Countries",
>>>>>>> lint code
      //     key: "id",
      //   },
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.dropTable("Hisoricalfact");
=======
    await queryInterface.dropTable("Hisoricalfacts");
>>>>>>> lint code
  },
};
