const { Country } = require("../models");

const countrySave = async ({ id, ...data }) => {
  const savedCountry = await Country.findOne({ where: { id } });
  if (savedCountry) return await savedCountry.update(data);
  return null;
};

export default countrySave;
