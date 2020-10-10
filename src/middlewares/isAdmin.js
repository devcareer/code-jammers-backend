import Auth from "../services/AdminServices/authServices";

export default class Authentication {
  static async verifyAdmin(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    let decoded;
    if (authorizationHeader) {
      const token = req.headers.authorization.split(" ")[1];
      decoded = await Auth.verifyToken(token);
    } else {
      return res.status(401).json({ error: "Authentication error. Token required." });
    }

    const { id } = decoded.user;
    const user = await Auth.checkId(id);
    if (user) {
      return next();
    }
    return res.status(403).json({ error: " Access denied." });
  }
}
