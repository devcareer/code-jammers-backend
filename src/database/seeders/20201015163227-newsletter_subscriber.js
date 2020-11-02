/* eslint-disable no-dupe-keys */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Newsletter_Subscribers", [
      {
        subscriberId: "6cbaa746-6e42-453e-91f4-c0de15fb4b9a",
        newsletterId: [
          "7cc6de97-2ed6-4422-9ce2-9ff22cc5e97f",
          " a430e505-937b-4908-9422-7aa57044e85c",
          " 866e1211-5b39-4cd4-9edf-865dd90bd360"
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subscriberId: "d3efec7e-480f-4cb3-b6d2-bed800b8989b",
        newsletterId: [
          "7cc6de97-2ed6-4422-9ce2-9ff22cc5e97f",
          " 866e1211-5b39-4cd4-9edf-865dd90bd360"
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Newsletter_Subscribers", null, {});
  }
};
