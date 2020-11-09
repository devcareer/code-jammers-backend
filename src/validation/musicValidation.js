import Joi from "joi";

const validation = music => {
  const schema = Joi.object({
    countryId: Joi.string().required()
      .empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "countryId is required.",
        "string.empty": "countryId cannot be an empty field.",
        "string.base": "countryId must be a string.",
        "string.guid": "countryId must be a UUID"
      }),
    category: Joi.string().required()
      .empty()
      .messages({
        "any.required": "category is required.",
        "string.empty": "category cannot be an empty field.",
        "string.base": "category must be a string."
      }),
    information: Joi.string().required()
      .empty()
      .messages({
        "any.required": "information is required.",
        "string.empty": "information cannot be an empty field.",
        "string.base": "information must be a string."
      }),
    gallery: Joi.string().required()
      .empty()
      .messages({
        "any.required": "An image is required.",
        "string.empty": "gallery cannot be an empty field.",
        "string.base": "Please provide a valid link."
      }),
  }).messages({
    "object.unknown": "You have used an invalid key."
  }).options({ abortEarly: false });
  return schema.validate(music);
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
  }).messages({
    "object.unknown": "You have used an invalid key."
  }).options({ abortEarly: false });
  return schema.validate(ids);
};

export { validation, validateId };
