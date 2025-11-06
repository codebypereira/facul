function calcMedia(...numeros) {
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    return soma / numeros.length
}

console.log(calcMedia(4, 8, 15))
console.log(calcMedia(4, 8, 15, 16, 23, 42))