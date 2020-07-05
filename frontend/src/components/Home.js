import React, { useContext, useState } from "react";
import UserContext from "../common/UserContext";
import SearchResult from "./SearchResult";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar"
import ExChangeRate from "./ExchangeRate";

export default function Home() {
  const { userData } = useContext(UserContext);
  const [countries, setCountries] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [countriesList, setCountriesList] = useState([]);
  const [rates, setRates] = useState();

  const searchResult = result => setCountries(result);
  const exChangeRates = rates => setRates(rates);

  const addToList = country => {
    const foundCountry = countries.find(item => item.name === country);
    console.log("foundcountry: ", foundCountry)
    setCountriesList((list) => [...list, foundCountry]);
  }

  const clearList = () => setCountriesList([]);

  const removeFromList = (country) => setCountriesList(list => list.filter(item => item.name !== country))

  if (!userData.user) return <p>Please log in to continue...</p>;
  return (
    <div>
      <SearchBar
        searchResult={searchResult}
        errorMsg={setErrorMsg}
      />
      <SearchResult
        countries={countries}
        err={errorMsg}
        addToList={addToList}
      />
      <div>
        <ExChangeRate
          exChangeRates={exChangeRates}
          countries={countriesList}
        />
        <CountriesList
          rates={rates}
          clearList={clearList}
          countries={countriesList}
          remove={removeFromList}
        />
      </div>
    </div>
  );
}
