let frase = prompt("Digite uma frase:");

let bigWords = frase
    .split(" ")
    .filter(palavra => palavra.length > 4);

console.log(bigWords);
