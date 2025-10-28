// EX3 - Peça ao utilizador para inserir uma temperatura em graus Celsius e, em seguida, converta e apresente a temperatura equivalente em graus Fahrenheit

let celsius = +prompt("Insira a temperatura em graus Celsius:");
let fahrenheit = (celsius * 9/5) + 32;

alert(`A temperatura em graus Fahrenheit é : ${fahrenheit}`);