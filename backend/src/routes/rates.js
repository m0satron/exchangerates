const axios = require("axios");
const getAllExchangeRates = require("../functions/getAllExchangeRates");

const rates = async (req, res) => {
  try {
    // const BASE = "SEK";
    // const API_URL = `http://data.fixer.io/api/latest?access_key=${process.env.FIXER_API_KEY}`;
    // const amount = req.params["amount"];
    // const currencies = JSON.parse(req.params["currencies"]);
    // const list = currencies.map((country) => country.currencies);
    // const currencyCodes = list
    //   .flat()
    //   .filter((code) => code !== "(none)")
    //   .toString();

    // const apiResponse = await axios.get(
    //   `${API_URL}&symbols=${BASE},${currencyCodes}`
    // );
    // const codes = Object.keys(await apiResponse.data["rates"]);
    // const values = Object.values(await apiResponse.data["rates"]);

    // const converted = getAllExchangeRates(values, amount);
    // const response = codes.map((code, index) => {
    //   return {
    //     name: code,
    //     value: converted[index],
    //   };
    // });

    const response = [ { name: 'SEK', value: 14 }, { name: 'KPW', value: 1357.71 } ]
    res.json(response);
  } catch (err) {
    res.json({ msg: err.message });
  }
};

module.exports = rates;
