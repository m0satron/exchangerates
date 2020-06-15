
const formatCountryData = (country) => {
  return {
    name: country.name,
    population: country.population,
    currencies: country.currencies
  }
}


module.exports = formatCountryData