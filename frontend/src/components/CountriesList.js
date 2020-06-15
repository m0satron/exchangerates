import React from "react";
import CountryCard from "./CountryCard";

export default function CountriesList({ rates = [], countries = [] }) {
  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} rates={rates} />
      ))}
    </div>
  );
}
