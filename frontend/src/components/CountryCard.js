import React from "react";
import Title from "../elements/Title"
import List from "../elements/List"
import { getCurrencies } from "../common/getCurrencies"


export default function CountryCard({ rates, country }) {
  return (
    <div>
      <div>
        <Title title={country.name}></Title>
      </div>
      <List
        name="Population"
        list={country.population}
      />
      <List
        name="currencies"
        list={getCurrencies(country.currencies, rates)}
      />
    </div>
  );
}
