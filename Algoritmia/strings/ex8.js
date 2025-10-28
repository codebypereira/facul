let str = prompt("Digite uma string:");
let charToCount = prompt("Digite o carácter a contar:");

let contadorChar = 0;
for (let i = 0; i < str.length;i++){
    if (str[i].toLowerCase() ===charToCount.toLowerCase())
        contadorChar++
}

alert(`O carácter "${charToCount}" ocorre ${contadorChar} vezes na string "${str}"`);