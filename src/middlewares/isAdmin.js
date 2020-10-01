const isAdmin = (req, res, next) => {
  const payload = req.decoded;
  console.log("Role: ", payload.user.role);
  if (payload && payload.user.role === "Admin") {
    next();
  } else {
    return res.status(403).send("Access denied.");
  }
};

export default isAdmin;
