import db from "../services/AdminServices/touristCenterService";
import { validation } from "../validation/touristCenterValidation";

/**
 * @class AdminController
 * @description create country
 * @exports AdminController
 */
export default class touristCenterController {
  static async addTouristCenter(req, res) {
    try {
      const {
        countryId, gallery, name, location, about
      } = req.body;
      const country = await db.findCountry(countryId);
      if(!country) return res.status(400).json({ status: 400, error: "country does not exist" });
      const { error } = validation(req.body);
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const centerName = await db.findTouristCenter(name);
      if (centerName) return res.status(409).json({ status: 409, message: "This Tourist center already exists in the database." });
      const createdTouristCenter = await db.addTouristCenter(req.body);
      return res.status(201).json({ status: 201, message: "A Tourist Center has been added.", data: createdTouristCenter, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }
}