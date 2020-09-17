import Joi from "joi";

export default class userValidation {
  static get userSchema() {
    return Joi.object({
      username: Joi.string().min(3).max(20).required(),
      email: Joi.string().email().min(3).max(100),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
  }
}
