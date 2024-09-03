const data = require("./dados.json");
const onlyWithBilling = data.filter((data) => data.valor != 0);
onlyWithBilling.sort((a, b) => a.valor - b.valor);
const average =
  onlyWithBilling
    .map((data) => data.valor)
    .reduce((prev, current) => prev + current, 0) / onlyWithBilling.length;
const daysAboveTheMonthlyAverage = onlyWithBilling.filter(
  (data) => data.valor > average
).length;

console.log(
  `O menor valor de faturamento ocorrido em um dia do mês foi de ${onlyWithBilling[0].valor} no dia ${onlyWithBilling[0].dia} `
);
console.log(
  `O maior valor de faturamento ocorrido em um dia do mês foi de ${
    onlyWithBilling[onlyWithBilling.length - 1].valor
  } no dia ${onlyWithBilling[onlyWithBilling.length - 1].dia} `
);
console.log(
  "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " +
    daysAboveTheMonthlyAverage
);
