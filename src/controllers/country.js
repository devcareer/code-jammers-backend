import Admin from "../services/AdminServices/countryService";
import { validation } from "../validation/countryValidation";

export default class AdminController {
  static async addCountry(req, res) {
    try {
      const {
        nameOfCountry, gallery, capital, population, officialLanguage, region, currency,
      } = req.body;
      let countryName;
      if (nameOfCountry && typeof nameOfCountry !== "string") return res.status(400).json({ status: 400, error: "Country name must be a string." });
      if (nameOfCountry) {
        countryName = nameOfCountry[0].toUpperCase() + nameOfCountry.slice(1).toLowerCase();
      }
      const newCountry = {
        nameOfCountry: countryName, gallery, capital, population, officialLanguage, region, currency
      };
      const { error } = validation(newCountry);
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const country = await Admin.checkCountry(countryName);
      if (country) return res.status(409).json({ status: 409, message: "This country already exists in the database." });
      const createdCountry = await Admin.addCountry(newCountry);
      return res.status(201).json({ status: 201, message: "A country has been added.", data: createdCountry, });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  }
}
