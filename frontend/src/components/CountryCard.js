import React from "react";

export default function CountryCard({ rates, country }) {
  const getRate = (code) => {
    if (!rates) return "";
    const found = rates.find((rate) => rate.name === code);
    if (found) return found.value;
  };
  return (
    <div>
      <div>
        <h2>{country.name}</h2>
      </div>
      <h3>Population: {country.population}</h3>
      <h3>
        currencies:
        <ul>
          {country.currencies.map((currency) => (
            <li key={currency.code}>
              {currency.name},({currency.code}): {getRate(currency.code)}
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
}
