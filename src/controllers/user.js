import bcrypt from "bcrypt";
import Util from "../utilities/util";
import User from "../UserService/User";

const util = new Util();

export default class userController {
  static async createUser(req, res) {
    try {
      const { email, username, password } = req.body;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = { email, username, password: hashedPassword };
      const createdUser = await User.createUser(newUser);
      util.setSuccess(201, "User created!", createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}
