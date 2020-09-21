<<<<<<< HEAD
import Joi from "joi";

<<<<<<< HEAD
const registerValidation = user => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(50),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co"] } }).min(5)
      .max(255),
    password: Joi.string().required().min(5).max(1024),
  });
  return schema.validate(user);
};

export { registerValidation };
=======
export default class userValidation {
  static get userSchema() {
    return Joi.object({
      username: Joi.string().min(3).max(20).required(),
      email: Joi.string().email().min(3).max(100),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
  }
}
>>>>>>> 84d76fc... add email conflict test
=======
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
>>>>>>> 5a6ba69... add validation
