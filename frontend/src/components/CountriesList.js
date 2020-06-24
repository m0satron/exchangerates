import React from "react";
import CountryCard from "./CountryCard";

export default function CountriesList({ rates = [], countries = [], clearList}) {
  if (!countries.length) return (<small>List is empty, add some countries to compare exchange rates!</small>)

  if (countries !== []) return (
    <div>
      <button class="button" onClick={clearList}>
        clear list
            </button>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} rates={rates} />
      ))}
    </div>
  );
}
