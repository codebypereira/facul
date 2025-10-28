let string;
let arr = [];

do {
    string = prompt("Digite uma string:")
    arr.push(string);
    
} while (string.toLowerCase() !== "sair");

arr.pop();
console.log("Strings: ", arr);