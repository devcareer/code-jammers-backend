import database from "../../models";

/**
 * @class Admin
 * @description allows admin user create and check country details
 * @exports Admin
 */
export default class db {
  /**
   * @param {string} newMusic - The Music details
   * @returns {object} An instance of the Music model class
   */
  static async addMusic(newMusic) {
    try {
      return await database.Music.create(newMusic);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} category - Music category
   * @returns {object} An instance of the Music model class
   */
  static async findMusicByCategory(category) {
    try {
      return await database.Music.findOne({
        where: {
          category,
        },
        include: [{ model: database.Comments, as: "comments" }]
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - Music id
   * @returns {object} An instance of the Music model class
   */
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

  /**
   * @returns {object} All instances of the Music model class
   */
  static async listMusic() {
    try {
      return await database.Music.findAll({ include: [{ model: database.Comments, as: "comments" }] });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - Music id
   * @returns {object} An instance of the Music model class
   */
  static async findMusicById(id) {
    try {
      return await database.Music.findOne({
        where: {
          id,
        },
        include: [{ model: database.Comments, as: "comments" }]
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} oldMusic - former Music object
   * @param {string} newMusic - new Music object
   * @returns {object} An updated instance of the Music model class
   */
  static async editMusic(oldMusic, newMusic) {
    try {
      if (newMusic.gallery) {
        oldMusic.gallery.push(newMusic.gallery);
        // eslint-disable-next-line no-param-reassign
        newMusic.gallery = oldMusic.gallery;
      }
      return await database.Music.update(newMusic, {
        where: { id: oldMusic.id },
        returning: true,
        plain: true
      });
    } catch (err) {
      throw err;
    }
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * @param {string} id - Music object
   */
  static async delMusic(id) {
    try {
      await database.Music.destroy({
        where: {
          id,
        }
      });
    } catch (err) {
      throw err;
    }
  }
}
