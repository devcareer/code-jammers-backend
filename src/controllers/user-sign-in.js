import bcrypt from "bcrypt";
import Util from "../utilities/util";
import User from "../services/UserService/User";
import jwtHelper from "../utilities/Jwt";
import { loginValidation, validateSignInInputs } from "../validation/userValidation";

const { generateToken } = jwtHelper;
const util = new Util();

export default class loginController {
  static async loginUser(req, res) {
    try {
      const { error } = loginValidation(req.body);
      if (error) {
        util.setError(400, "Validation Error", error.message);
        return util.send(res);
      }
      const { email, password } = req.body;
      const user = await User.emailExist(email);
      if (!user) {
        return res.status(400).send({ message: "Email does not exist." });
      }
      const validpass = await bcrypt.compare(password, user.password);
      if (!validpass) {
        return res.status(400).send({ message: "Password is not correct!." });
      }
      validateSignInInputs(user, res);
      const token = await generateToken({ user });
      util.setSuccess(201, "User Logged in!", token);
    } catch (error) {
      util.setError(400, error.message);
    } return util.send(res);
  }
}
