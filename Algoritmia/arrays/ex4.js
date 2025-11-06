let str = prompt("Escreva uma lista de nomes separados por vírgula:")
let nomesArr = str.split(",");
let nomesCorrigidos = []

//for tradicional
for (let i = 0; i < nomesArr.length; i++) {
    let nome = nomesArr[i];
    let nomeCorrigido = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    nomeCorrigidor.push(nomesCorrigidos);
}

// OU - sem slice
for (let i = 0; i < nomesArr.length; i++) { //for...of // nomesArr.forEach
    let nome = nomesArr[i];
    let nomeCorrigido = "";
    for (let j = 0; j < nome.length; j++) {
        let char = nome.charAt(j);
        if (j === 0) {
            char = char.toUpperCase();
        } else {
            char = char.toLowerCase();
        }
        nomeCorrigido += char;
    }
    nomesCorrigidos.push(nomeCorrigido);
}
console.log(nomesCorrigidos);


 