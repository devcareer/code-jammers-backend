// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send("Access denied.");
  }
  next();
};
