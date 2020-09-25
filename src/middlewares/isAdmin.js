// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const payload = req.decoded;
  console.log("Role: ", payload.user.role);
  if (payload && payload.user.role === "User") {
    next();
  } else {
    return res.status(403).send("Access denied.");
  }
};
