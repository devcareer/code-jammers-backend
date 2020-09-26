import Util from "../utilities/util";
import User from "../services/UserService/User";
import jwtHelper from "../utilities/Jwt";
import { registerValidation, validateSignInInputs } from "../validation/userValidation";

const { generateToken } = jwtHelper;
const util = new Util();

export default class loginController {
  // eslint-disable-next-line consistent-return
  static async loginUser(req, res) {
    try {
      const { error } = registerValidation(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      const { email, password } = req.body;
      const user = await User.checkEmail(email);
      const validationResult = await validateSignInInputs(user, password, res);
      if (validationResult === "pass") {
        const token = await generateToken({ user });
        util.setSuccess(201, "User Logged in!", {
          email: user.email, username: user.username, role: user.role, token
        });
      } else {
        return validationResult;
      }
    } catch (error) {
      util.setError(400, error.message);
      util.send(res);
    }
  }
}
