const numbers = [4, 5, 12, -3, 34];
let contNeg = 0
let sum = 0
//3.1

numbers.forEach( n => {
    sum += n;
})


alert(`Média: ${sum/ numbers.length}`)

//3.2

let maior = numbers[0]
let menor = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i]
    }

    if (numbers[i] < menor) {
        menor = numbers[i]
    }

    //3.3

    if (numbers[i] < 0) {
        contNeg++
    }

}

alert(`Máximo: ${maior}`)
alert(`Mínimo: ${menor}`)
alert(`Quantidade de números negativos: ${contNeg}`)

//3.4

let valor1 = +prompt("Insira um número:")
let valor2 = +prompt("Insira um número:")
let cont = 0

if (valor2 < valor1) {
    let tmp = valor1;
    valor1 = valor2;
    valor2 = tmp
}

for (i of numbers) {
    if (i >= valor1 && i <= valor2) {
        cont++;
    }
}
alert(`O array tem ${cont} valores entre ${valor1} e ${valor2}`)
 