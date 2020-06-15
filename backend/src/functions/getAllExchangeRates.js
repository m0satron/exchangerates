const roundNumber = (value) => Number(Math.round(value + "e" + 2) + "e-" + 2);

const convertCurrency = (base, currency) => currency / base;

const getAllExchangeRates = (list, amount) => {
  const base = list[0];
  return list.map((value) => {
    const convertedCurrency = convertCurrency(base, value) * amount;
    return roundNumber(convertedCurrency);
  });
};

module.exports = getAllExchangeRates;
