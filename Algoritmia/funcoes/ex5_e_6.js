function calcArea(largura, altura) {
    return (largura * altura);
}

console.log(`A área do retângulo é: ${calcArea(3, 5)}`)

// Função arrow
// calcularAreaArrow(2,3); // ERRO!
let calcularAreaArrow = (largura, altura) => largura * altura;

console.log(`A área do retângulo é: ${calcularAreaArrow(4, 2)}`)