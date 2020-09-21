<<<<<<< HEAD
<<<<<<< HEAD
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
        return res.status(400).send(error.details[0].message);
      }
      const { email, username, password } = req.body;
      const userEmail = await User.checkEmail(email);
      if (userEmail) {
        return res.status(409).send({ message: "Email already used by another user." });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { email, username, password: hashedPassword };
      const createdUser = await User.createUser(newUser);
      const token = await generateToken({ createdUser });
      const data = {
        email: createdUser.email,
        username: createdUser.username
      };
      data.token = token;
      util.setSuccess(201, "User created!", data);
=======
import util from "../utilities/util";
import User from "../UserService/User";
=======
import bcrypt from "bcrypt";
import Util from "../utilities/util";
import User from "../UserService/user";

const util = new Util();
>>>>>>> 703912e... comit msg

class userController {
  static async createUser(req, res) {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      util.setError(400, "Please you are required to fill all fields");
      return util.send(res);
    }
    const hashedPassword = bcrypt.hashSync(password);
    console.log(hashedPassword);
    const newUser = req.body;
    try {
      const createdUser = await User.createUser(newUser);
      util.setSuccess(201, "User created!", createdUser);
>>>>>>> 283f3f5... resolve conflict
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
<<<<<<< HEAD
}
=======
}
export default userController;
>>>>>>> 283f3f5... resolve conflict
