import React, { useContext, useState } from "react";
import UserContext from "../common/UserContext";
import SearchResult from "./SearchResult";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar"
import ExChangeRate from "./ExchangeRate";

export default function Home() {
  const { userData } = useContext(UserContext);
  const [country, setCountry] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [countriesList, setCountriesList] = useState([]);
  const [rates, setRates] = useState();

  const searchResult = result => setCountry(result);
  const exChangeRates = rates => setRates(rates);

  const addToList = () => setCountriesList((list) => [...list, country]);
  const clearList = () => setCountriesList([]);

  if (!userData.user) return <p>Please log in to continue...</p>;
  return (
    <div>
      <SearchBar searchResult={searchResult} errorMsg={setErrorMsg} />
      <div>
        <div>
 
          <SearchResult
            country = { country}
            err = {errorMsg}
            addToList = {addToList}
          />
        </div>
      </div>
      <div>
        <ExChangeRate exChangeRates={exChangeRates} countries={countriesList} />
        <button class="button" onClick={clearList}>
          clear list
            </button>
        <div>
          <CountriesList rates={rates} countries={countriesList} />
        </div>
      </div>
    </div>
  );
}
