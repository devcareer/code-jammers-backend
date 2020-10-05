import jwt from "jsonwebtoken";

const user = {
  username: "GarryT",
  email: "Garrasdy@gmail.com",
  password: "123456",
};

const user2 = {
  email: "Garry@gmail.com",
  password: "123456",
};

const user3 = {
  username: "Grace",
  email: "Garrasdy@gmail.com",
  password: "123456",
};

const user4 = {
  username: "JaneDoe",
  email: "Janedoe@gmail.com",
  password: "123456",
};

const decoder = token => {
  const result = jwt.verify(
    token,
    process.env.JWT_KEY,
  );
  const payload = result;
  console.log(payload);
  const userId = payload.createdUser.id;
  return userId;
};

const newRole = {
  role: "Admin"
};
export {
  user, user2, user3, user4, decoder, newRole
};
