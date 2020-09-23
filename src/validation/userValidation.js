/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import Joi from "joi";

const errorMessage = (message, path) => () => ({
  toString: () => message,
  message,
  path,
});

const registerValidation = user => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30)
      .required()
      .error(errors => {
        for (err of errors) {
          switch (err.code) {
            case ("string.min" || "string.max"): {
              return errorMessage("username must be between 3 and 30 characters", ["username"])();
            }
            case "any.required": {
              return errorMessage("Please input a Username", ["username"])();
            }
            case "string.alphanum": {
              return errorMessage("Sorry, Username must contain only alphanumeric characters")();
            }
            default: {
              return errorMessage("username has error", ["username"])();
            }
          }
        }
      }),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co"] } }).min(5)
      .max(50)
      .error(errorMessage("Sorry, Email is required for you to signup", ["email"])),
    password: Joi.string().alphanum().required().error(errors => {
      for (err of errors) {
        switch (err.code) {
          case ("string.min" || "string.max"): {
            return errorMessage("Sorry, Password must have between 5 and 50 characters", ["password"])();
          }
          case "any.required": {
            return errorMessage("Please input password", ["password"])();
          }
          default: {
            return errorMessage("password has error", ["password"])();
          }
        }
      }
    }),
  });
  return schema.validate(user);
};

export { registerValidation };
