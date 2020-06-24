import React, { useState } from "react";
import Axios from "axios";


export default function ExchangeRate({ countries, exChangeRates }) {
  const [amount, setAmount] = useState();

  const getExchangeRate = async (e) => {
    e.preventDefault();
    if (!countries || !countries.length) return;
    const currencies = countries.map((country) => {
      return {
        currencies: country.currencies.map((currency) => currency.code),
      };
    });

    const currencyCodes = JSON.stringify(currencies);
    const listOfRates = await Axios.get(
      `http://localhost:3001/home/rates/${amount}/${currencyCodes}`
    );
    console.log( await listOfRates)
    if (listOfRates) exChangeRates(listOfRates.data);
  };

  return (
    <div>
      <form class="search" onSubmit={getExchangeRate}>
        <label htmlFor="exchangerate">
          type an amount to compare exchange rates to SEKK
        </label>
        <input
          id="exchangerate"
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>

    </div>
  )
}
