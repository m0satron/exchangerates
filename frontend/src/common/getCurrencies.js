import React from "react"


const getRate = (code, rates) => {
  if (!rates) return ""
  const found = rates.find(rate => rate.name === code)
  if (found) return found.value
}

export const getCurrencies = (currencies, rates) => {
  if (!currencies) return null;

return currencies.map(currency =>
    (<li key={currency.code}>
      {currency.name}, ({currency.code}): {getRate(currency.code, rates)}
    </li>)
  )



}
