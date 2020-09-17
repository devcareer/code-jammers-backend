// import Joi from "joi";

// export default class userValidation {
//   static get userSchema() {
//     return Joi.object({
//       username: Joi.string().min(3).max(20).required(),
//       email: Joi.string().email().min(3).max(100),
//       password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
//     });
//   }
// };

import Joi from "@hapi/joi";

const userValidation = data => {
  const schema = {
    username: Joi.string().min(4).max(15).required(),
    email: Joi.string().email().min(3).max(150),
    password: Joi.string().min(6).max(100).required(),
  };
  console.log(`data:${data}`);
  console.log(`schema: ${schema}`);
  return Joi.validate(data, schema);
};

export default userValidation;

// module.exports.userValidation = userValidation;
