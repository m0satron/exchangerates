import React from "react";
import { getCurrencies } from "../common/getCurrencies";
import Card from "../elements/Card"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



export default function CountryCard({ rates, country, fn }) {

  const formatPopulation = () => {
    const nth = 3;
    let num = country.population.toString().split("");
    let index = num.length - nth;

    while (index >= 1) {
      num.splice(index, 0, " ")
      index = index - nth;
    }
    return num.join("")
  }

const headerContent = {
  title: country.name,
  fn: fn,
  icon: HighlightOffIcon
}
  return (
      <Card
        header={headerContent}
        population={formatPopulation()}
        currencies={getCurrencies(country.currencies, rates)}
      />
  );
}
