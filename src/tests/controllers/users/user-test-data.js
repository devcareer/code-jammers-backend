import jwt from "jsonwebtoken";

const user = {
  username: "garryT",
  email: "garrasdy@gmail.com",
  password: "123456",
};

const user2 = {
  email: "garry@gmail.com",
  password: "123456",
};

const user3 = {
  username: "grace",
  email: "garrasdy@gmail.com",
  password: "123456",
};

const decoder = token => {
  const result = jwt.verify(
    token,
    process.env.JWT_KEY,
  );
  const payload = result;
  const userId = payload.createdUser.id;
  return userId;
};

const newRole = {
  role: "Admin"
};
export {
  user, user2, user3, decoder, newRole
};
