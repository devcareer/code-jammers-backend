import bcrypt from "bcrypt";

export default password => {
  const salt = bcrypt.genSaltSync(10);
  const pass = bcrypt.hashSync(password, salt);
  return pass;
};
