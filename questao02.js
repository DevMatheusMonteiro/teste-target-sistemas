const readline = require("readline-sync");
const option = readNumber();
const fibonacci = returnFibonacciSequence(option);
const message = fibonacci.some((number) => number == option)
  ? `O número ${option} pertence a sequência de Fibonacci`
  : `O número ${option} não pertence a sequência de Fibonacci`;

console.log(message);

function readNumber() {
  do {
    let option = Number(readline.question("Informe um número: "));
    if (!isNaN(option)) {
      return option;
    }
    console.log("Erro: Informe um número válido!");
  } while (true);
}
function returnFibonacciSequence(option) {
  let n1 = 0;
  let n2 = 1;
  let sum = 0;
  const fibonacci = [0, 1];
  while (sum < option) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    fibonacci.push(n2);
  }
  return fibonacci;
}
