const axios = require("axios");
const formatCountryData = require("../functions/formatCountryData");
const route = require("express").Router();

// route.get("/:country", async (req, res) => {
//   console.log(req.params)
//   try {
//     const countries = req.params['countries']
//     console.log(req.params)
//     const API_URL = `https://restcountries.eu/rest/v2/name/${countries}`
//     console.log("china here: ", req)
//     const api_response = await axios.get(API_URL)
//     const country = formatCountryData(await api_response.data[0])
//     console.log(api_response.data)
//     console.log(country)
//     res.json(country)

//   } catch (err) {
//     res.status(404).json({ msg: err })
//   }
// })

const countries = async (req, res) => {
  try {
    const countries = req.params["country"];
    const API_URL = `https://restcountries.eu/rest/v2/name/${countries}`;
    const api_response = await axios.get(API_URL);
    const country = formatCountryData(await api_response.data[0]);
    res.json(country);
  } catch (err) {
    res.status(404).json({ msg: "nope" });
  }
};

module.exports = countries;
