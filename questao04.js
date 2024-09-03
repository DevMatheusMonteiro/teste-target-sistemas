const data = require("./faturamentoPorEstado.json");
const total = data
  .map((data) => data.faturamento)
  .reduce((prev, current) => prev + current, 0);

const dataWithRepresentativePercentage = data.map((data) => {
  const representativePercentage = Number(
    ((data.faturamento * 100) / total).toFixed(2)
  );
  return { ...data, representativePercentage };
});
console.log(
  "Valor total do faturamento mensal da distribuidora: " + total + "\n\n"
);
dataWithRepresentativePercentage.forEach((data) => {
  console.log(
    `Estado: ${data.estado}\nFaturamento Mensal: R$${data.faturamento
      .toString()
      .replace(
        ".",
        ","
      )}\nRepresentação percentual dentro do valor total mensal: ${data.representativePercentage
      .toString()
      .replace(".", ",")}%\n`
  );
});
