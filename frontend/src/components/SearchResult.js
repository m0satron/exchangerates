import React from "react";
import ErrorMessage from "./ErrorMessage";

export default function SearchResult({ country, err, addToList }) {
  if (err) {
    return (<ErrorMessage query={err} />)
  }
  if (!country) { return <div></div> }

  const { name, population, currencies } = country
  return (
    <div>
      <button class="button" onClick={addToList}>
        add{" "}
      </button>
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

