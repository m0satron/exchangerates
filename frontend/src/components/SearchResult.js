import React from "react";

export default function SearchResult({ name, population, currencies }) {
  return (
    <div>
      <div>
        <h2>{name}</h2>
      </div>
      <h3>Population: {population}</h3>
      <h3>
        currencies:
        <ul>
          {currencies.map((currency) => (
            <li key={currency.code}>
              {currency.name}, ({currency.code})
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
}
