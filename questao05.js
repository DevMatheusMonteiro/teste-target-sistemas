const readline = require("readline-sync");
const text = readline.question("Informe o texto a ser invertido: ");
let invertedText = "";
for (let i = text.length; i > 0; i--) {
  invertedText += text[i - 1];
}
console.log(invertedText);
