import database from "../../models";

const addCountry = newCountry => database.Countries.create(newCountry);

export default addCountry;
