export default {
  up: queryInterface => queryInterface.bulkInsert(
    "Countries",
    [
      {
        id: "6003fb36-5112-463e-a1f9-c8944e72412f",
        nameOfCountry: "Nigeria",
        gallery:
            "https://img.freepik.com/free-vector/nigeria-map-flag-national-emblem_2239-230.jpg?size=338&ext=jpg",
        capital: "FCT Abuja",
        population: 205,
        officialLanguage: "English",
        region: "West Africa",
        currency: "Naira",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2e11e4a9-441b-4426-9521-39adc64ccfad",
        nameOfCountry: "Zambia",
        gallery:
            "https://cdn.pixabay.com/photo/2013/07/13/14/18/zambia-162464_960_720.png",
        capital: "Lusaka",
        population: 17351708,
        officialLanguage: "English",
        region: "Southern Africa",
        currency: "Kwacha",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),
  down: queryInterface => queryInterface.bulkDelete("Countries", null, {}),
};
