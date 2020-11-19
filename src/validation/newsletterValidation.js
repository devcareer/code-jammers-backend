import Joi from "joi";

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
  }).messages({
    "object.unknown": "You have used an invalid key."
  });
  return schema.validate(user);
};

export default newsletterValidation;
