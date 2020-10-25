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
    static async listTouristCenters() {
        try{
            return await database.TouristCenters.findAll();
        } catch (err) {
            throw err;
        } 
    }
    static async findTouristCenterById(id) {
        try {
            return await database.TouristCenters.findOne({
                where: {
                    id,
                }
            });
        } catch (err) {
            throw err;
        }
    }
    static async editTouristCenter(id, touristCenter) {
        try {
           return await database.TouristCenters.update(touristCenter, {
                where: { id },
        returning: true,
        plain: true
              });
        } catch (err) {
            throw err;
        }
    }
    static async delTouristCenter(id) {
        try {
            const touristCenter = await database.TouristCenters.findOne({
                where: {
                    id,
                }
            });
            if(touristCenter === null){
                return 0;
            }
        return await touristCenter.destroy();
        } catch (err) {
            throw err;
        }
    }
}