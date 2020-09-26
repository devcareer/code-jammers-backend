import Joi from "joi";
import bcrypt from "bcrypt";

const registerValidation = user => {
  const schema = Joi.object({
    username: Joi.string().required().alphanum().min(3)
      .max(255)
      .empty()
      .messages({
        "string.alphanum": "Sorry, Username must contain only alphanumeric characters",
        "string.empty": "username cannot be an empty field",
        "string.min": "username should have a minimum length of 3 and a maximum length of 255"
      }),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "uk", "co"] } }).min(5)
      .max(100)
      .empty()
      .messages({
        "string.email": "Please enter a valid email",
      }),
    password: Joi.string().required().empty().min(5)
      .max(1024)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .messages({
        "string.pattern.base": "Password must contain only alphanumeric characters.",
        "string.empty": "Sorry, password cannot be an empty field",
        "string.min": "Password should have a minimum length of 5"
      }),
  }).options({ abortEarly: false });
  return schema.validate(user);
};

const validateSignInInputs = async (userDelails, inputedPassword, res) => {
  try {
    if (!userDelails) {
      return res.status(400).send({ message: "Email does not exist." });
    }
    const validpass = await bcrypt.compare(inputedPassword, userDelails.password);
    if (!validpass) return res.status(400).send({ message: "Password does not exist." });
    if (!userDelails.verified) return res.status(400).send({ message: "Please Verify your account to continue. click on the link provided in your mail" });
  } catch (e) {
    throw e;
  }
  return "pass";
};

export { registerValidation, validateSignInInputs };
