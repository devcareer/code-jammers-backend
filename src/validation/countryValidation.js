import Joi from "joi";

const validation = country => {
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
        "string.valid": "Country must be an African country.",
        "string.empty": "Country cannot be an empty field.",
        "string.base": "Country name must contain only alphabetical characters."
      }),
    gallery: Joi.string().required()
      .empty()
      .messages({
        "any.required": "An image is required.",
        "string.empty": "username cannot be an empty field.",
        "string.base": "Please provide a valid link."

      }),
    capital: Joi.string().required()
      .empty()
      .messages({
        "any.required": "Name of capital is required.",
        "string.empty": "Capital cannot be an empty field.",
        "string.base": "Capital must contain only alphabetical characters."
      }),
    population: Joi.number().integer().required()
      .empty()
      .messages({
        "any.required": "Population size is required.",
        "number.empty": "Population cannot be an empty field."
      }),
    officialLanguage: Joi.string().required()
      .empty()
      .messages({
        "any.required": "An official language is required.",
        "string.empty": "Official language cannot be an empty field.",
        "string.base": "Language must contain only alphabetical characters."
      }),
    region: Joi.string().required()
      .empty()
      .messages({
        "any.required": "Sorry, region is required.",
        "string.empty": "Region cannot be an empty field.",
        "string.base": "Region must contain only alphabetical characters."
      }),
    currency: Joi.string().required()
      .empty()
      .messages({
        "any.required": "Sorry, currency is required.",
        "string.empty": "Currency cannot be an empty field.",
        "string.base": "Currency must contain only alphabetical characters."
      }),
  }).options({ abortEarly: false });
  return schema.validate(country);
};

export { validation };
