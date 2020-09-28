import bcrypt from "bcrypt";
import Util from "../utilities/util";
import User from "../services/UserService/User";
import jwtHelper from "../utilities/Jwt";
import { registerValidation } from "../validation/userValidation";

const { generateToken } = jwtHelper;
const util = new Util();

export default class userController {
  static async createUser(req, res) {
    try {
      const { error } = registerValidation(req.body);
      if (error) {
        util.validationError(400, "Validation Error", error.message);
        return util.send(res);
      }
      const { email, username, password } = req.body;
      const emailExist = await User.emailExist(email);
      if (emailExist) {
        return res.status(409).json({ message: "Email already used by another user." });
      }
      const usernameExist = await User.usernameExist(username);
      if (usernameExist) {
        return res.status(409).json({ message: `Sorry, ${username} is not available. Please pick another username` });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { email, username, password: hashedPassword };
      const createdUser = await User.createUser(newUser);
      const token = await generateToken({ createdUser });
      util.setSuccess(201, "User created!", token);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}
