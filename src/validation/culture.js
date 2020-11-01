import Joi from "joi";

const validation = user => {
  const schema = Joi.object({
    countryId: Joi.string().required().empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "ID not provided. Please provide an ID.",
        "string.empty": "ID cannot be an empty field.",
        "string.base": "ID must be a string.",
        "string.guid": "ID must be a UUID"
      }),
    name: Joi.string().required().empty()
      .messages({
        "any.required": "Name of culture is required",
        "string.empty": "Name of culture cannot be an empty field",
      }),
    festivals: Joi.string().empty()
      .messages({
        "string.empty": "Festival cannot be an empty field",
      }),
    dressing: Joi.string().required().empty()
      .messages({
        "any.required": "Dressing style is required",
        "string.empty": "Dressing style cannot be an empty field",
      }),
    language: Joi.string().required().empty()
      .messages({
        "any.required": "Language is required",
        "string.empty": "Language cannot be an empty field",
      }),
    gallery: Joi.string().required().empty()
      .messages({
        "any.required": "An image is required.",
        "string.empty": "Gallery cannot be an empty field.",
        "string.base": "Please provide a valid link."
      }),
    tribe: Joi.string().required().empty()
      .messages({
        "any.required": "A tribe is required.",
        "string.empty": "Tribe cannot be an empty field.",
      }),
  }).options({ abortEarly: false });
  return schema.validate(user);
};

export { validation };
