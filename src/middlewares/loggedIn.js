import jwt from "jsonwebtoken";
// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader) {
    const token = req.headers.authorization.split(" ")[1]; // Bearer <token>
    try {
      const result = jwt.verify(
        token,
        process.env.JWT_KEY,
        {
          expiresIn: "24hr"
        }
      );
      req.decoded = result;
      console.log(req.decoded);
      next();
    } catch (err) {
      return res.json({ err });
    }
  } else {
    return res.status(401).json({ error: "Authentication error. Token required." });
  }
};
