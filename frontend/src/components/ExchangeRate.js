import React, { useState } from "react";
import Axios from "axios";
import Input from "../elements/Input"


export default function ExchangeRate({ countries, exChangeRates }) {
  const [amount, setAmount] = useState();

  const getAmount = SEK => setAmount(SEK)

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
      <form onSubmit={getExchangeRate}>
        <Input
          placeholderText="amount in SEK"
          inputType="search"
          fn={getAmount}
        />
        {/* <label htmlFor="exchangerate">
          type an amount to compare exchange rates to SEKK
        </label>
        <input
          id="exchangerate"
          onChange={(e) => setAmount(e.target.value)}
        /> */}
      </form>

    </div>
  )
}
