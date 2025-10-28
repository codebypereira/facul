//EX 4 - Peça ao utilizador para inserir três notas e, em seguida, calcule e apresente a média dessas notas

let nota1= +prompt("Insira a primeira nota:");
let nota2= +prompt("Insira a segunda nota:");
let nota3= +prompt("Insira a terceira nota:");

let media = (nota1 + nota2 + nota3) / 3;
alert(`A média das notas é: ${media.toFixed(2)}`);