import React from "react";
import CountryCard from "./CountryCard";
import Button from "../elements/Button"

export default function CountriesList({ rates = [], countries = [], clearList}) {
  if (!countries.length) return (<small>List is empty, add some countries to compare exchange rates!</small>)

  if (countries !== []) return (
    <div>
      <Button
        content="clear list"
        fn={clearList}
      />
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} rates={rates} />
      ))}
    </div>
  );
}
