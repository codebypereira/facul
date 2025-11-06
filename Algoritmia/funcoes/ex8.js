function concatena(separador, ...strings) {
    return strings.join(separador)
}

console.log(concatena("/", "red", "orange"));
console.log(concatena(".", "maçã", "banana"));