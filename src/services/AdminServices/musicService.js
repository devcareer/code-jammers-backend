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
   * @param {string} genre - Music genre
   * @returns {object} An instance of the Music model class
   */
  static async findMusicByGenre(genre) {
    try {
      return await database.Music.findOne({
        where: {
          genre,
        }
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
      return await database.Music.findAll();
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
        }
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - Music id
   * @param {string} Music - Music object
   * @returns {object} An updated instance of the Music model class
   */
  static async editMusic(id, Music) {
    try {
      return await database.Music.update(Music, {
        where: { id },
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
