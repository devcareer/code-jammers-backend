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
        return res.status(400).json({ error: error.message });
      }
      const { email, username, password } = req.body;
      const userEmail = await User.checkEmail(email);
      if (userEmail) {
        return res.status(409).json({ message: "Email already used by another user." });
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
  static async updateUserProfile(req, res) {
    try {
      const { id } = req.params;
      const { firstName, lastName, profilePicture } = req.body;
      const updateProfile = { firstName, lastName, profilePicture };
      const updatedProfile = await User.updateUserProfile(id, updateProfile);
      if (!updatedProfile) {
        util.setError(404, `Cannot find user with the email: ${email}`);
      } else {
        util.setSuccess(200, "User profile updated", updatedProfile);
      }
      return util.send(res);
    } catch (error) {
      throw error;
    }
  }
}
