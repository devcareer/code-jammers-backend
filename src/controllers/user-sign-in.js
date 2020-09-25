import bcrypt from "bcrypt";
import Util from "../utilities/util";
import User from "../services/UserService/User";
import jwtHelper from "../utilities/Jwt";
import { loginValidation } from "../validation/userValidation";

const { generateToken } = jwtHelper;
const util = new Util();

export default class loginController {
  static async loginUser(req, res, next) {
    try {
      const { error } = loginValidation(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      const { email, password } = req.body;
      const user = await User.checkEmail(email);
      if (!user) {
        return res.status(400).send({ message: "Email does not exist." });
      }
      const validpass = await bcrypt.compare(password, user.password);
      if (!validpass) {
        return res.status(400).send({ message: "Password does not exist." });
      }
      const token = await generateToken({ user });
      const data = {
        email: user.email, username: user.username, role: user.role
      };
      data.token = token;
      util.setSuccess(201, "User Logged in!", data);
    } catch (error) {
      util.setError(400, error.message);
    } util.send(res);
    return next();
  }
}
