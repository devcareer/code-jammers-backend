import addCountry from "../services/AdminServices/countryService";

export default class adminController {
  static async addCountry(req, res) {
    try {
      const {
        nameOfCountry, gallery, capital, population, officialLanguage, region, currency,
      } = req.body;
      const newCountry = {
        nameOfCountry, gallery, capital, population, officialLanguage, region, currency,
      };
      const createdCountry = await addCountry(newCountry);
      const data = {
        nameOfCountry: createdCountry.nameOfCountry,
        capital: createdCountry.gallery,
        region: createdCountry.region,
      };
      return res.status(200).json({
        status: 200,
        message: "A country has been added.",
        data: [data],
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        error: [error.message],
      });
    }
  }
}
