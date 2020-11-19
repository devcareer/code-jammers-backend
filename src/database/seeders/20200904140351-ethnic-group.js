export default {
  up: queryInterface => queryInterface.bulkInsert(
    "EthnicGroups",
    [
      {
        id: "63995ef8-351f-4035-a268-c6cd7697f0ef",
        countryId: "6003fb36-5112-463e-a1f9-c8944e72412f",
        name: "Yoruba",
        festivals: "Eyo festival",
        dressing: "The most commonly worn by women are Ìró (wrapper) and Bùbá (blouse–like loose top). They also have matching Gèlè (head gear) that must be put on whenever the Ìró and Bùbá is on. Just as the cap (Fìlà) is important to men, women’s dressing is considered incomplete without Gèlè",
        language: "Yoruba",
        gallery:
            "https://unsplash.com/photos/eS_aZA5S42Y",
        culturalPractices: "Some Yoruba believe that a baby may come with pre-destined names. For instance, twins (ibeji) are believed to have natural-birth names. Thus the first to be born of the two is called Taiwo or 'Taiye', shortened forms of Taiyewo, meaning the taster of the world. This is to identify the first twin as the one sent by the other one to first go and taste the world. If he/she stays there, it follows that it is not bad, and that would send a signal to the other one to start coming. Hence the second to arrive is named Kehinde (late arrival; it is now common for many Kehindes to be called by the familiar diminutive 'Kenny'.Irrespective of the sex the child born to the same woman after the twins is called Idowu, and the one after this is called Alaba, then the next child is called Idogbe. The Yoruba believe that some children are born to die. This derives from the phenomenon of the tragic incidents of high rate of infant mortality sometimes afflicting the same family for a long time. When this occurs, the family devises all kinds of method to forestall a recurrence, including giving special names at a new birth.", 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "09015644-4195-417f-8934-7cdc6e8519e2",
        countryId: "2e11e4a9-441b-4426-9521-39adc64ccfad",
        name: "Bemba",
        festivals: "Ukusefya Pa Ngwena",
        dressing: "Before the arrival of Europeans, the most common type of cloth was made from bark. Women wore it around the waist as a loincloth. Today most Zambians, including the Bemba, wear modern clothes. Men wear Western clothing (shorts, pants, and shirts). However, the designs and fashions in women's dresses are usually of Zambian or African origin.",
        language: "Bemba",
        gallery:
            "https://unsplash.com/photos/eS_aZA5S42Y",
        culturalPractices: "When a man and women are married the man goes to live with the wife's family and so generations are traced in a matrilineal fashion, as opposed to the more common patrilineal lineages.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),
  down: queryInterface => queryInterface.bulkDelete("EthnicGroups", null, {}),
};
