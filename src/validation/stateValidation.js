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
      .empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "countryId is required.",
        "string.empty": "countryId cannot be an empty field.",
        "string.base": "countryId must be a string.",
        "string.guid": "countryId must be a UUID"
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

const validateId = ids => {
  const schema = Joi.object({
    id: Joi.string().required()
      .empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "ID not provided. Please provide an ID.",
        "string.empty": "ID cannot be an empty field.",
        "string.base": "ID must be a string.",
        "string.guid": "ID must be a UUID"
      }),
    countryId: Joi.string().guid({ version: "uuidv4" })
      .messages({
        "string.guid": "CountryId must be a UUID"
      })
  }).options({ abortEarly: false });
  return schema.validate(ids);
};

export { validation, validateId };
