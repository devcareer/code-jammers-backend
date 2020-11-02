import jwt from "jsonwebtoken";

export default (payload, key) => {
  const token = jwt.sign(payload, key, { expiresIn: 3600 });
  return token;
};
