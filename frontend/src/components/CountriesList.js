import React from "react";
import CountryCard from "./CountryCard";
import Button from "../elements/Button"
import Title from "../elements/Title"


export default function CountriesList({ rates = [], countries, clearList, remove }) {
  if (!countries) return (<small>List is empty, add some countries to compare exchange rates!</small>)

  if (countries !== []) return (

    <div style={{ margin:'12px', padding: "12px", borderTop: "1px solid gray", borderBottom: "1px solid gray"}}>
      <Title title="Saved countries:" />

      {countries.map((country) => (

        <CountryCard key={country.name} country={country} rates={rates} fn={remove} />
      ))}


      <Button
        content="clear list"
        fn={clearList}
      />

    </div>
  );
}
