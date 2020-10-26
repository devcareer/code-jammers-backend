import Joi from "joi";

const validation = state => {
  const schema = Joi.object({
    name: Joi.string().required()
      .messages({
        "any.required": "Sorry, state name is required.",
        "any.only": "State must be an African state.",
        "string.empty": "State cannot be an empty field.",
        "string.base": "State name must contain only alphabetical characters."
      }),
    countryId: Joi.string().required()
      .empty()
      .messages({
        "any.required": "CountryId is required.",
        "string.empty": "CountryId cannot be an empty field.",
        "string.base": "CountryId must contain only alphabetical characters."
      }),
    gallery: Joi.string().required()
      .empty()
      .messages({
        "any.required": "An image is required.",
        "string.empty": "Image field cannot be an empty field.",
        "string.base": "Please provide a valid link."

      }),
    capital: Joi.string().required()
      .empty()
      .messages({
        "any.required": "Name of capital is required.",
        "string.empty": "Capital cannot be an empty field.",
        "string.base": "Capital must contain only alphabetical characters."
      }),
  }).options({ abortEarly: false });
  return schema.validate(state);
};

export { validation };
