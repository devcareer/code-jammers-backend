import Admin from "../services/AdminServices/countryService";

export default class adminController {
  static async addCountry(req, res) {
    try {
      const {
        nameOfCountry, gallery, capital, population, officialLanguage, region, currency,
      } = req.body;
      const country = await Admin.checkCountry(nameOfCountry);
      if (country) {
        return res.status(409).json({ status: 409, message: "This country already exists in the database." });
      }
      const newCountry = {
        nameOfCountry, gallery, capital, population, officialLanguage, region, currency,
      };
      const createdCountry = await Admin.addCountry(newCountry);
      return res.status(200).json({
        status: 200,
        message: "A country has been added.",
        data: createdCountry,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        error: [error.message],
      });
    }
  }
}
