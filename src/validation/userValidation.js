import Joi from "joi";

const registerValidation = user => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(50),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co"] } }).min(5)
      .max(255),
    password: Joi.string().required().min(5).max(1024),
  });

  return schema.validate(user);
};

const loginValidation = user => {
  const schema = Joi.object({
    email: Joi.string().required().email().min(5)
      .max(255),
    password: Joi.string().required().min(5).max(1024),
  });

  return schema.validate(user);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
