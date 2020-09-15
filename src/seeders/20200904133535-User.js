'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert ('Users', [{
      email: 'olusola@gmail.com',
      username: 'archyonrails',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'olusola@gmail.com',
      username: 'archyonrails',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'olusola@gmail.com',
      username: 'archyonrails',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
