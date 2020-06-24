import React, { useState } from 'react';
import styled from "styled-components"
import Axios from "axios";
import SearchIcon from '@material-ui/icons/Search';

const Form = styled.form`
@media (min-width: 768px) {
  max-width: 50%;
} 
`;

const Input = styled.input`
  border: none;
  width: 85%;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 25px;
  padding: 6px 12px;
  margin: 12px;
`;

const Label = styled.label`
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
`;


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
      <Form onSubmit={search}>
        <Label htmlFor="search">Search for a country</Label>
        <Div>
          <Input type="search" placeholder="Search for a country..." onChange={(e) => setSearchQuery(e.target.value)} />
          <SearchIcon onClick={search} />
        </Div>
      </Form>
    </div>
  )
}
