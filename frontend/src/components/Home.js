import React, { useContext, useState } from "react";
import UserContext from "../common/UserContext";
import Axios from "axios";
import SearchResult from "./SearchResult";
import ErrorMessage from "./ErrorMessage";
import CountriesList from "./CountriesList"

export default function Home() {
  const { userData } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState();
  const [country, setCountry] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [countriesList, setCountriesList] = useState([])
  const [rates, setRates] = useState()
  const search = async (e) => {
    e.preventDefault();
    try {
      const foundCountry = await Axios.get(
        `http://localhost:3001/home/countries/${searchQuery}`
      );
      setCountry(foundCountry.data);
    } catch (err) {
      await setErrorMsg(true);
    }
  };
  const addToList = () => setCountriesList(list => [...list, country])
  const clearList = () => setCountriesList([])
  const getExchangeRate = () => {}

  if (!userData.user) return <p>Please log in to continue...</p>;
  return (
    <div>
      <p>Welcome {userData.user.userName}</p>
      <form onSubmit={search}>
        <label htmlFor="search">Search for a country:</label>
        <input type="search" onChange={(e) => setSearchQuery(e.target.value)} />
      </form>
      <div>
      {
          country ? (
            <div>
              <button onClick={addToList}>add </button>
              <SearchResult
                name={country.name}
                population={country.population}
                currencies={country.currencies}
              />

            </div>
          ) : ''
        }
        {
          errorMsg ? (
            <ErrorMessage query={searchQuery} />
          ) : ''
        }
        </div>
        <div>
        {
        countriesList.length ? (
          <div>
            <form onSubmit={getExchangeRate}>
              <label
                htmlFor="exchangerate"
              >
                type an amount to check exchange rates
              </label>
              <input
                id="exchangerate"
                // onChange={(e) => setAmount(e.target.value)}
              />
            </form>
            <button onClick={clearList}>clear list</button>
            <CountriesList rates={rates} countries={countriesList} />
          </div>
        ) : ''
      }
        </div>
    </div>
  );
}
