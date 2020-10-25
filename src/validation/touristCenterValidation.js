import Joi from "joi";

const validation = touristCenter => {
  const schema = Joi.object({
    countryId: Joi.string().required()
      .empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "countryId is required.",
        "string.empty": "countryId cannot be an empty field.",
        "string.base": "countryId must be a string.",
        "string.guid": "countryId must be a UUID"
      }),
    name: Joi.string().required()
      .empty()
      .messages({
        "any.required": "name is required.",
        "string.empty": "name cannot be an empty field.",
        "string.base": "name must be a string."
      }),
    gallery: Joi.string().required()
      .empty()
      .messages({
        "any.required": "An image is required.",
        "string.empty": "gallery cannot be an empty field.",
        "string.base": "Please provide a valid link."
      }),
    location: Joi.string().required()
      .empty()
      .messages({
        "any.required": "location is required.",
        "string.empty": "location cannot be an empty field.",
        "string.base": "location must contain only alphabetical characters."
      }),
    about: Joi.string().required()
      .empty()
      .messages({
        "any.required": "about is required.",
        "string.empty": "about cannot be an empty field.",
        "string.base": "about must contain only alphabetical characters."
      }),
  }).options({ abortEarly: false });
  return schema.validate(touristCenter);
};

const validateId = id => {
  const schema = Joi.object({
    id: Joi.string().required()
      .empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "ID not provided. Please provide an ID.",
        "string.empty": "ID cannot be an empty field.",
        "string.base": "ID must be a string.",
        "string.guid": "ID must be a UUID"
      })
  }).options({ abortEarly: false });
  return schema.validate(id);
};

const validateCountryId = id => {
  const schema = Joi.object({
    countryId: Joi.string().guid({ version: "uuidv4" })
      .messages({
        "string.guid": "CountryId must be a UUID"
      })
  }).options({ abortEarly: false });
  return schema.validate(id);
};

export { validation, validateId, validateCountryId };
