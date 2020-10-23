import database from "../../models";

/**
 * @class Admin
 * @description allows admin user create and check country details
 * @exports Admin
 */
export default class db {
    /**
     * @param {string} newTouristCenter - The TouristCenter details
     * @returns {object} An instance of the TouristCenters model class
     */
    static async addTouristCenter(newTouristCenter) {
        try {
            return await database.TouristCenters.create(newTouristCenter);
        } catch (err) {
            throw err;
        }
    }

    /**
     * @param {string} TouristCenterName - The TouristCenter name
     * @returns {object} An instance of the TouristCenters model class
     */
    static async findTouristCenter(name) {
        try {
            return await database.TouristCenters.findOne({
                where: {
                    name,
                }
            });
        } catch (err) {
            throw err;
        }
    }

    static async findCountry(id) {
        try {
            return await database.Countries.findOne({
                where: {
                    id,
                }
            });
        } catch (err) {
            throw err;
        }
    }
}