import Joi from "joi";

const registerValidation = user => {
  const schema = Joi.object({
    username: Joi.string().required().alphanum().min(3)
      .max(255)
      .empty()
      .messages({
        "any.required": "Sorry, username is required",
        "string.alphanum": "Sorry, Username must contain only alphanumeric characters",
        "string.empty": "username cannot be an empty field",
        "string.min": "username should have a minimum length of 3 and a maximum length of 255"
      }),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co"] } }).min(5)
      .max(100)
      .empty()
      .messages({
        "any.required": "Sorry, email is required",
        "string.empty": "Sorry, Email cannot be an empty field",
        "string.email": "Please enter a valid email",
      }),
    password: Joi.string().required().empty().min(5)
      .max(1024)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .messages({
        "any.required": "Sorry, password is required",
        "string.pattern.base": "password must contain only alphanumeric characters.",
        "string.empty": "Sorry, password cannot be an empty field",
        "string.min": "password should have a minimum length of 5"
      }),
  }).options({ abortEarly: false });
  return schema.validate(user);
};

const loginValidation = user => {
  const schema = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co", "io"] } }).min(5)
      .max(100)
      .empty()
      .messages({
        "any.required": "Sorry, email is required",
        "string.email": "Please enter a valid email",
        "string.empty": "Sorry, Email cannot be an empty field",
      }),
    password: Joi.string().required().min(5).max(1024)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .messages({
        "string.pattern.base": "Password must contain only alphanumeric characters.",
        "string.empty": "Sorry, password cannot be an empty field",
        "string.min": "Password should have a minimum length of 5"
      }),
  });
  return schema.validate(user);
};

const subscriberValidation = user => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(3).max(255)
      .empty()
      .messages({
        "any.required": "Sorry, first name is required",
        "string.empty": "Sorry, You have to enter your first name",
      }),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co"] } }).min(5)
      .max(100)
      .empty()
      .messages({
        "any.required": "Sorry, email is required",
        "string.empty": "Sorry, Email cannot be an empty field",
        "string.email": "Please enter a valid email",
      }),
  });
  return schema.validate(user);
};

const newsletterValidation = user => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(255)
      .empty()
      .messages({
        "any.required": "Please add a title to this newsletter",
        "string.empty": "Sorry, newsletter title is required!",
      }),
    message: Joi.string().required().min(20).max(10000)
      .empty()
      .messages({
        "any.required": "Please add a message to your newsletter",
        "string.empty": "To send a newsletter, you have to add a message",
      }),
  });
  return schema.validate(user);
};

export {
  registerValidation,
  loginValidation,
  subscriberValidation,
  newsletterValidation
};
