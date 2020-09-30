import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import Util from "../utilities/util";
import User from "../services/UserService/User";
import jwtHelper from "../utilities/Jwt";
import { registerValidation, loginValidation } from "../validation/userValidation";
import sgMailService from "../utilities/sendgrid";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { generateToken } = jwtHelper;
const util = new Util();

export default class UserController {
  static async createUser(req, res) {
    try {
      const { error } = registerValidation(req.body);
      if (error) {
        util.setError(400, "Validation Error", error.message);
        return util.send(res);
      }
      const { email, username, password } = req.body;
      const emailExist = await User.emailExist(email);
      if (emailExist) {
        return res.status(409).json({ status: 409, error: "Email already used by another user." });
      }
      const usernameExist = await User.usernameExist(username);
      if (usernameExist) {
        return res.status(409).json({ status: 409, error: `Sorry, ${username} is not available. Please pick another username` });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { email, username, password: hashedPassword };
      const createdUser = await User.createUser(newUser);
      const token = await generateToken({ createdUser });
      await sgMail.send(sgMailService.data(email, token));
      util.setSuccess(201, "User created! An email has been sent to you to verify your account", token);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      throw util.send(res);
    }
  }

  static async verifyUser(req, res) {
    try {
      const { createdUser: { userId } } = jwt.verify(req.params.token, process.env.JWT_KEY);
      const updatedUser = await User.updateUserVerification(userId);
      util.setSuccess(200, "User Verified successfully!", { email: updatedUser[1].email, username: updatedUser[1].username, verified: updatedUser[1].verified });
      util.send(res);
    } catch (e) {
      res.send(e);
    }
  }

  static async loginUser(req, res) {
    try {
      const { error } = loginValidation(req.body);
      if (error) {
        util.setError(400, "Validation Error", error.message);
        return util.send(res);
      }
      const { email, username, password } = req.body;
      const user = await User.emailExist(email);
      if (!user) {
        return res.status(404).json({ status: 404, error: "Email does not exist." });
      }
      const validpass = await bcrypt.compare(password, user.password);
      if (!validpass) {
        return res.status(400).json({ status: 400, error: "Password is not correct!." });
      }
      const token = await generateToken({ user });
      util.setSuccess(200, "User Logged in!", token);
      return util.send(res);
    } catch (error) {
      util.setError(500, error.message);
    } throw util.send(res);
  }
}
