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
      // const { error } = registerValidation(req.body);
      // if (error) {
      //   util.setError(400, "Validation Error", error.message);
      //   return util.send(res);
      // }
      const { email, username, password } = req.body;
      const emailExist = await User.emailExist(email);
      if (emailExist) {
        return res.status(404).json({ status: 409, error: "Email already exist." });
      }
      const usernameExist = await User.usernameExist(username);
      if (usernameExist) {
        return res.status(409).json({ status: 409, error: `Sorry, ${username} is not available. Please pick another username` });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { username, password: hashedPassword };
      const emailUser = { email, password: hashedPassword };
      if (emailUser) {
        const createdUser = await User.createUser(emailUser);
        return createdUser;
      // eslint-disable-next-line no-else-return
      } else if (newUser) {
        const createdUser = await User.createUser(newUser);
        return createdUser;
      }
      const token = await generateToken({ createdUser });
      util.setSuccess(201, "User created!", token);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      throw util.send(res);
    }
  }
}
