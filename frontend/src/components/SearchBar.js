import React, { useState } from 'react';

import Axios from "axios";

export default function SearchBar({ searchResult, errorMsg }) {
  const [searchQuery, setSearchQuery] = useState();

  const search = async (e) => {
    e.preventDefault();
    try {
      const foundCountry = await Axios.get(
        `http://localhost:3001/home/countries/${searchQuery}`
      );
      searchResult(foundCountry.data);
      errorMsg(false)
    } catch (err) {
      errorMsg(searchQuery)
    }
  };

  return (
    <div>
      <form className="search" onSubmit={search}>
        <div className="search__bar">
          <label htmlFor="search">Search for a country:</label>
          <input type="search" onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <button onClick={search}>search</button>
      </form>
    </div>
  )
}
