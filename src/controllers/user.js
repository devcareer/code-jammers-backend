import bcrypt from "bcrypt";
import Util from "../utilities/util";
import User from "../UserService/User";
import jwtHelper from "../UserService/Jwt";

const { generateToken } = jwtHelper;
const util = new Util();
export default class userController {
  static async createUser(req, res) {
    try {
      const { email, username, password } = req.body;
      const userEmail = await User.checkEmail(email);
      if (userEmail) {
        return res.status(400).send({ message: "Email already used by another user." });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { email, username, password: hashedPassword };
      const createdUser = await User.createUser(newUser);
      const token = await generateToken({ createdUser });
      util.setSuccess(201, "User created!", token, createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}
