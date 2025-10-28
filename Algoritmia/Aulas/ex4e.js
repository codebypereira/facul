//EX 5 - Peça ao utilizador um número inteiro representando o número total de segundos, e apresente o seu correspondente em horas, minutos e segundos

let totalSegundos = +prompt("Insira o número total de segundos:");

// console.log(totalSegundos / 3600);
// console.log(totalSegundos % 3600);

let dias = Math.floor(totalSegundos / 86400);
totalSegundos = totalSegundos % 86400;

let horas = Math.floor(totalSegundos / 3600);
let segundosRestantes = totalSegundos % 3600;

// console.log(segundosRestantes / 60);
// console.log(segundosRestantes % 60);

let minutos = Math.floor(segundosRestantes / 60);
let segundosFinais = segundosRestantes % 60;

alert(`${dias} dias, ${horas} horas, ${minutos} minutos e ${segundosFinais} segundos.`);

