import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_KEY;
export default class jwtHelper {
  static async generateToken(payload, secret = secretKey) {
    const token = await jwt.sign(payload, secret, { expiresIn: "1d" });
    return token;
  }
}
