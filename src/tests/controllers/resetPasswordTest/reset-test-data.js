import signToken from "../../../utilities/signToken";

const user = {
  id: "80e13d8c-b0aa-431f-a107-8aad5bd9324c",
  username: "Billy",
  email: "bislonzulu1@outlook.com",
  password: "thunderbolt"
};
const notUser = {
  email: "balldash@live.com"
};

const newPassword = {
  newPassword: "firebolt"
};
const signed = signToken(user, user.password);
export {
  user, notUser, newPassword, signed
};
