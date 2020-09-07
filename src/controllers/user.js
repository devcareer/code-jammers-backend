import util from "../utilities/util";
import User from "../UserService/User";

class userController {
  static async createUser(req, res) {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      util.setError(400, "Please you are required to fill all fields");
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await User.createUser(newUser);
      util.setSuccess(201, "User created!", createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default userController;
