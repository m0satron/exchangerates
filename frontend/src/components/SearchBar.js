import React, { useState } from 'react';
import styled from "styled-components"
import Axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
import Input from "../elements/Input"


const Form = styled.form`
@media (min-width: 768px) {
  max-width: 50%;
} 
`;

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
      <Form onSubmit={search}>
        <Input
          fn={getQuery}
          placeholderText="Search for a country..."
          inputType="search"
          Icon={SearchIcon}
        />
      </Form>
    </div>
  )
}
