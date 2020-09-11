export default {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "Cultures",
      [
        {
          id: "63995ef8-351f-4035-a268-c6cd7697f0ef",
          countryId: "6003fb36-5112-463e-a1f9-c8944e72412f",
          types: "Yoruba culture",
          festivals: "Eyo festival",
          dressing: "Agbádá àti Fìlà from Iseyin",
          language: "Yoruba",
          gallery:
            "https://netstorage-legit.akamaized.net/images/468ff81348dddbff.jpg",
          tribe: "Nigeria",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete("Cultures", null, {}),
};
