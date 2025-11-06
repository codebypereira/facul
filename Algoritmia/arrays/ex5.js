let parque = new Array(10)
parque.fill(false); //false = lugar livre, true = lugar ocupado

let lugaresOcupados = 0;

//OU
// while(parque.includes(false)) {
while (lugaresOcupados < parque.length) {
    let posicao = prompt("Insira uma posição (1 a 10) para estacionar o carro:");
    if (isNaN(posicao) || posicao < 1 || posicao > parque.length) {
        console.log("Posição inválida. Tente novamente.");
        continue;
    }
    if (!parque[posicao- 1]) {
        parque[posicao - 1] = true; //ocupar o lugar
        lugaresOcupados++
        console.log(`Carro estacionado na posição ${posicao}.`);
    } else {
        console.log(`A posição ${posicao} já está ocupada. Escolha outra.`);
    }
}
console.log("O parque está cheio. Não é possível estacionar mais carros.");