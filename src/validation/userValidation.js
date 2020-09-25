import Joi from "joi";

const registerValidation = user => {
  const schema = Joi.object({
    username: Joi.string().required().alphanum().min(3)
      .max(30)
      .empty()
      .messages({
        "string.alphanum": "Sorry, Username must contain only alphanumeric characters",
        "string.empty": "usernames cannot be an empty field",
        "string.min": "username should have a minimum length of 3",
        "string.max": "username should have a maximum length of 30",
        "any.required": "Sorry, you have to enter a username field"
      }),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co"] } }).min(5)
      .max(100),
    password: Joi.string().required().empty().min(5)
      .max(40)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .messages({
        "string.pattern.base": "Password must contain only alphanumeric characters.",
        "any.required": "Sorry, you have to enter a password field",
        "string.empty": "Sorry, password cannot be an empty field",
        "string.min": "Password should have a minimum length of 5",
        "string.max": "Password should have a maximum length of 40",
      }),
  }).options({ abortEarly: false });
  return schema.validate(user);
};

export { registerValidation };
