import React from "react";
import ErrorMessage from "./ErrorMessage";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ThemeProvider } from "styled-components";
import { getCurrencies } from "../common/getCurrencies";
import Card from "../elements/Card";



export default function SearchResult({countries, err, addToList }) {
  if (err) {
    return (<ErrorMessage query={err} />)
  }
  if (!countries) { return <div></div> }

  const headerContent = country => {
    return {
      title: country.name,
      icon: AddCircleIcon,
      fn: addToList
    }
  }
  const theme = {
    bg: "white"
  }

 return (
    <ThemeProvider theme={theme}>
      {
       countries.map(country => (
          <Card
            header={headerContent(country)}
          />

        ))
      }
      </ThemeProvider>

  );
}

