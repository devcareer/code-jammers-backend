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
<<<<<<< HEAD
        return res.status(400).send(error.details[0].message);
      }
      const { email, username, password } = req.body;
      const userEmail = await User.checkEmail(email);
      if (userEmail) {
        return res.status(409).send({ message: "Email already used by another user." });
=======
        util.setError(400, "Validation Error", error.message);
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
>>>>>>> 96a3e8e35699b1b33afe9997e1431b4397baa040
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { email, username, password: hashedPassword };
      const createdUser = await User.createUser(newUser);
      const token = await generateToken({ createdUser });
<<<<<<< HEAD
      const data = {
        email: createdUser.email,
        username: createdUser.username
      };
      data.token = token;
      util.setSuccess(201, "User created!", data);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
=======
      util.setSuccess(201, "User created!", token);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      throw util.send(res);
>>>>>>> 96a3e8e35699b1b33afe9997e1431b4397baa040
    }
  }
}
