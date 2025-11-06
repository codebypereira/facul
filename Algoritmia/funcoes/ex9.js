function somaDigitos(...n) {
    let numString = String(n);
    let soma = 0;

    for (let i = 0; i < n.length; i++) {
        let char = numString[i];
        soma += +char
    }

    return soma
}

console.log(somaDigitos(134));
console.log(somaDigitos(542));