const numbers = [4, 5, 12, -4, 34];

//i)
let quadrados = numbers.map(n => n ** 2);

//OU

let quadrados1 = numbers.map(function (n) {
    return n ** 2;
});

//ciclo for tradicional

let quadrados2 = [];
for (let i = 0; i < numbers.length; i++) {
    quadrados.push( numbers[i] ** 2);
} // [16, 25, 144, 16, 1156]

//ii)
let maiores5 = numbers.filter(n => n >= 5);   // [5, 12, 34]

//iii)

let neg = numbers.some(n => n < 0); // true

//iv)

let pairs = numbers.every(n => n % 2 === 0) // false

//v)
let soma = numbers.reduce((total, n) => total + n, 0);
let media = soma / numbers.length;

//vi)
let oddSquare = numbers
    .filter(n => n % 2 != 0)
    .map(n => n ** 0.5);

console.log(oddSquare)

//vii)

let maior50 = numbers
    .map(n => n * 2)
    .some(n => n > 50);

console.log(maior50)

//viii)

let mediaPositivo = numbers
    .filter(n => n > 0)
    .reduce((acc, n) => acc + n, 0);

let media2 = mediaPositivo / numbers.filter(n => n > 0).length

console.log(media2) 
