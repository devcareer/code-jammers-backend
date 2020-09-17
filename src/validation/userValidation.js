import Joi from "@hapi/joi";

const userValidation = data => {
  const schema = {
    username: Joi.string().min(4).max(15).required(),
    email: Joi.string().email().min(3).max(150),
    password: Joi.string().min(6).max(100).required()
  };
  return Joi.validate(data, schema);
};

const loginValidation = data => {
  const schema = {
    email: Joi.string().email().min(3).max(150),
    password: Joi.string().min(6).max(100).required()
  };
  return Joi.validate(data, schema);
};

export default { userValidation, loginValidation };
