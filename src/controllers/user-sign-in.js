import bcrypt from "bcrypt";
import Util from "../utilities/util";
import User from "../UserService/User";
import jwtHelper from "../UserService/Jwt";

const { generateToken } = jwtHelper;
const util = new Util();

export default class loginController {
  // eslint-disable-next-line consistent-return
  static async loginUser(req, res) {
    try {
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
        email: userEmail.email, password: userEmail.username
      };
      data.token = token;
      util.setSuccess(201, "User created!", data);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}
