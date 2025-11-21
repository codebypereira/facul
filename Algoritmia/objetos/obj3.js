const grades = [
    {
        name: 'Rui',
        grade: 9
    },
    {
        name: 'Ana',
        grade: 12
    },
    {
        name: 'Carla',
        grade: 14
    }
]

//Crie função que crie um objeto (com dados do utilizador) e insira os mesmos no array

let newName = prompt("Digite o nome do aluno:");
let newGrade = +prompt("Digite a nota do aluno");

function addGrade(name, grade) {
    let newStudent = {name : name, grade: grade};
    grades.push(newStudent)
    
}
addGrade(newName, newGrade);
console.log(grades);

//Crie uma função que calcule a média das notas
function calcAvg(grades) {
    let total = grades.reduce((n, aluno) => n + aluno.grade, 0);
    return total / grades.length;
}
console.log(calcAvg(grades))

//Crie função que liste os nomes dos estudantes com nota positiva

    