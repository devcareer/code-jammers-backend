import Joi from "joi";

const foodValidation = food => {
  const schema = Joi.object({
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

const validateCountry = country => {
  const schema = Joi.object({
    nameOfCountry: Joi.string().required().valid("Nigeria",
      "Ethiopia",
      "Egypt",
      "Democratic Republic of the Congo",
      "Tanzania",
      "South Africa",
      "Kenya",
      "Uganda",
      "Algeria",
      "Sudan",
      "Morocco",
      "Mozambique",
      "Ghana",
      "Angola",
      "Somalia",
      "Ivory Coast",
      "Madagascar",
      "Cameroon",
      "Burkina Faso",
      "Niger",
      "Malawi",
      "Zambia",
      "Mali",
      "Senegal",
      "Zimbabwe",
      "Chad",
      "Tunisia",
      "Guinea",
      "Rwanda",
      "Benin",
      "Burundi",
      "South Sudan",
      "Eritrea",
      "Sierra Leone",
      "Togo",
      "Libya",
      "Central African Republic",
      "Mauritania",
      "Republic of the Congo",
      "Liberia",
      "Namibia",
      "Botswana",
      "Lesotho",
      "Gambia",
      "Gabon",
      "Guinea-Bissau",
      "Mauritius",
      "Equatorial Guinea",
      "Eswatini",
      "Djibouti",
      "Réunion (France)",
      "Comoros",
      "Cape Verde",
      "Mayotte (France)",
      "São Tomé and Príncipe",
      "Seychelles")
      .messages({
        "any.required": "Sorry, country name is required.",
        "any.only": "Country must be an African country.",
        "string.empty": "Country cannot be an empty field.",
        "string.base": "Country name must contain only alphabetical characters."
      }),
  }).messages({
    "object.unknown": "You have used an invalid key."
  });
  return schema.validate(country);
};

export {
  foodValidation, validateCountry
};
