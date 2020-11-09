import Joi from "joi";

const foodValidation = food => {
  const schema = Joi.object({
    countryId: Joi.string().required()
      .empty().guid({ version: "uuidv4" })
      .messages({
        "any.required": "countryId is required.",
        "string.empty": "countryId cannot be an empty field.",
        "string.base": "countryId must be a string.",
        "string.guid": "countryId must be a UUID"
      }),
    foodName: Joi.string().required().empty().messages({
      "any.required": "Please provide a food name",
      "string.empty": "Food name cannot be an empty field.",
      "string.base": "Food name must contain only alphabetical characters."
    }),
    methodOfPreparation: Joi.string().required().empty()
      .messages({
        "string.empty": "Method of Preparation cannot be an empty field.",
        "any.required": "Method of Preparation is required.",
      }),
    gallery: Joi.string()
      .messages({
        "string.base": "Please provide a valid link."
      })
  }).messages({
    "object.unknown": "You have used an invalid key."
  });
  return schema.validate(food);
};

export {
  foodValidation
};
