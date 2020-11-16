import User from "../services/AdminServices/activateUser";

/**
 * @class UserController
 * @description create, verify and log in user
 * @exports UserController
 */
export default class AdminController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async ActivateUser(req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await User.activateUser(id);
      res.status(200).json({
        status: 200,
        message: "User activated successfully!",
        data: {
          email: updatedUser[1].email, username: updatedUser[1].username, verified: updatedUser[1].verified, active: updatedUser[1].active
        }
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error" });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async DeActivateUser(req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await User.deActivateUser(id);
      res.status(200).json({
        status: 200,
        message: "User De-activated successfully!",
        data: {
          email: updatedUser[1].email, username: updatedUser[1].username, verified: updatedUser[1].verified, active: updatedUser[1].active
        }
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error" });
    }
  }
}
