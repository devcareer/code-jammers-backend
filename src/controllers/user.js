import bcrypt from "bcrypt";
import Util from "../utilities/util";
import User from "../services/UserService/User";
import jwtHelper from "../utilities/Jwt";
<<<<<<< HEAD
<<<<<<< HEAD
import { registerValidation } from "../validation/userValidation";
=======
>>>>>>> d84d9cf... rearrange folder
=======
import userValidation from "../validation/userValidation";
>>>>>>> 84d76fc... add email conflict test

const { generateToken } = jwtHelper;
const util = new Util();

export default class userController {
  static async createUser(req, res) {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const { error } = registerValidation(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
=======
      const result = Joi.validate(req.body, userValidation.userSchema, {
        convert: false,
      });
      console.log(result);
>>>>>>> 84d76fc... add email conflict test
=======
      const { error } = userValidation(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      console.log(`error: ${error}`);
>>>>>>> 5a6ba69... add validation
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
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}
