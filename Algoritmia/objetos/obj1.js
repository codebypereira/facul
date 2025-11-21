let movie = {}; //objeto vazio
movie.title = "Interstellar",
movie["realizador"] = "Cristopher Nolan";
movie.year = 2014;
movie["type"] = "sci-fi";
console.log(movie);

//Altere o valor da propriedade ano para 2013
movie.year = 2013;
console.log(movie)

//Remova a propriedade name do objeto
delete movie.type;
console.log(movie)

//Adicione outra propriedade calculada com base numa variável
let prop = "cast";
movie[prop] = ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"];
console.log(movie)

//Crie uma função para listar os nomes das propriedades do objeto
function listarPropriedades(obj) {  // devolve array
    return Object.keys(obj);
}
console.log(listarPropriedades(movie))

function listarPropriedadesObjStr(obj) {  // devolve string
    return Object.keys(obj).join(", ")
}
console.log(listarPropriedadesObjStr(movie)) 

function logPropriedades(obj) { // nao devolve nada, so imprime no console
    for (let chave in obj) {
        console.log(chave);
    }
}
logPropriedades(movie);

//Crie uma função descricaoFilme(obj) que devolva "Interstellar (2014), realizado por Christopher Nolan."

function movieDescription(obj) {
    return `${obj.title } (${obj.year}), realizado por ${obj.realizador}`;
}
console.log(movieDescription(movie))

//metodo dentro do objeto
movie.description = function() {
    return `${this.title} (${this.year}), realizado por ${this.realizador}.`;
}
console.log(movie.description());