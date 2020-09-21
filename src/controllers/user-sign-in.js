import bcrypt from "bcrypt";
import Util from "../utilities/util";
import User from "../services/UserService/User";
import jwtHelper from "../utilities/Jwt";
import { loginValidation } from "../validation/userValidation";

const { generateToken } = jwtHelper;
const util = new Util();

export default class loginController {
  static async loginUser(req, res) {
    try {
      const { error } = loginValidation(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      const { email, password } = req.body;
      const userEmail = await User.checkEmail(email);
      if (!userEmail) {
        return res.status(400).send({ message: "Email adoes not exist." });
      }
      const validpass = await bcrypt.compare(password, userEmail.password);
      if (!validpass) {
        return res.status(400).send({ message: "Password does not exist." });
      }
      const token = await generateToken({ userEmail });
      const data = {
        email: userEmail.email, username: userEmail.username, role: userEmail.role
      };
      data.token = token;
      util.setSuccess(201, "User Logged in!", data);
    } catch (error) {
      util.setError(400, error.message);
    } return util.send(res);
  }
}
