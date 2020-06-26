import React from "react";
import ErrorMessage from "./ErrorMessage";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import styled from "styled-components"
import List from "../elements/List"
import Header from "../elements/Header"
import {getCurrencies} from "../common/getCurrencies"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 12px;
  margin: 12px;
  border: 1px solid black;
`;

export default function SearchResult({ country, err, addToList }) {
  if (err) {
    return (<ErrorMessage query={err} />)
  }
  if (!country) { return <div></div> }

  const { name, population, currencies } = country

  const formatPopulation = () => {
    const nth = 3;
    let num = population.toString().split("");
    let index = num.length - nth;

    while (index >= 1) {
      num.splice(index, 0, " ")
      index = index - nth;
    }
    return num.join("")

  }
  return (
    <Wrapper>
      <Header
        title={name}
        Icon={AddCircleIcon}
        fn={addToList}
      />
      <List
        name="population"
        list={formatPopulation()}
      />
      <List
        name="currencies"
        list={getCurrencies(currencies)}
      />
    </Wrapper>
  );
}

