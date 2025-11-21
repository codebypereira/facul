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

function listNames(grades) {
    return grades
        .filter(aluno => aluno.grade >= 10)
        .map(aluno => aluno.name);
}
console.log(`Aprovados: ${listNames(grades).join(", ")}`);