const axios = require("axios");
const formatCountryData = require("../functions/formatCountryData");
const route = require("express").Router();

const countries = async (req, res) => {
  try {
    const countries = req.params["country"];
    const API_URL = `https://restcountries.eu/rest/v2/name/${countries}`;
    const api_response = await axios.get(API_URL);
   
    const country = formatCountryData(await api_response.data[0]);
    // const country = {
    //   name: "Korea (Democratic People's Republic of)",
    //   population: 25281000,
    //   currencies: [ { code: 'KPW', name: 'North Korean won', symbol: '₩' } ]
    // }
    res.json(country);
  } catch (err) {
    res.status(404).json({ msg: "nope" });
  }
};

module.exports = countries;
