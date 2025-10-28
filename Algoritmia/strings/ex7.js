let str = prompt("Digite uma string para contar as vogais:");
let contadorVogais = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    // str [i] = "a" ou str.charAt(i)
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
        contadorVogais++
}
alert(`A string: ${str} tem ${contadorVogais} vogais.`)