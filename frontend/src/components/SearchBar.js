import React, { useState } from 'react';
import Axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
import Input from "../elements/Input"


export default function SearchBar({ searchResult, errorMsg }) {
  const [searchQuery, setSearchQuery] = useState();

  const getQuery = query => setSearchQuery(query)

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
      <form onSubmit={search}>
        <Input
          fn={getQuery}
          placeholderText="Search for a country..."
          inputType="search"
          Icon={SearchIcon}
        />
      </form>
    </div>
  )
}
