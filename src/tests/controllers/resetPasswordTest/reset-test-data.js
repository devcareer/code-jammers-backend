import signToken from "../../../utilities/signToken";

const user = {
  id: "80e13d8c-b0aa-431f-a107-8aad5bd9324c",
  username: "Billy",
  email: "balldash@live.com",
  password: "thunderbolt",
  toJSON: () => ({
    id: "80e13d8c-b0aa-431f-a107-8aad5bd9324c",
    username: "Billy",
    email: "balldash@live.com",
    password: "thunderbolt",
  })
};
const notUser = {
  email: "jadeclaw@notuser.com",
  toJSON: () => ({
    email: "jadeclaw@notuser.com",
  })
};

const newPassword = {
  newPassword: "firebolt",
  toJSON: () => ({
    newPassword: "firebolt",
  })
};

const signed = signToken(user, user.password);
export {
  user, notUser, newPassword, signed
};
