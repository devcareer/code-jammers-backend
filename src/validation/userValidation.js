import Joi from "joi";

const registerValidation = user => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co"] } }).min(5)
      .max(255),
    password: Joi.string().required().min(5).max(1024),
  });
  return schema.validate(user);
};

const loginValidation = user => {
  const schema = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co"] } }).min(5)
      .max(255),
    password: Joi.string().required().min(5).max(1024),
  });
  return schema.validate(user);
};

export { registerValidation, loginValidation };
