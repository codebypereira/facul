let carrinho = [
    {produto: "Livro", preco: 12.9, quantidade: 2},
    {produto: "Caneta", preco: 1.5, quantidade: 5},
    {produto: "Caderno", preco: 3.2, quantidade: 3} 
];

//Criar função totalCarrinho() que devolve o total gasto no carrinho de compras
function totalCarrinho(carrinho) {
    let total = 0;
    for (let produto of carrinho) {
        total += produto.preco * produto.quantidade;
    }
    return total;
}
console.log(`Total: ${totalCarrinho(carrinho).toFixed(2)}€`);

//Crie uma função quantidadeMaior(N) que mostre apenas os produtos com quantidades maiores que N

function quantidadeMaior(carrinho, n) {
    let nomes = [];
    for (let produto of carrinho) {
        if (produto.quantidade > n) {
            nomes.push(produto.nome);
        }
    }
    return nomes;
}
// com filter e map

function quantidadeMaior2(carrinho, N) {
    let nomes = carrinho
    .filter(produto => produto.quantidade > N)
    .map(produto => produto.nome);
    return nomes;
} 

console.log(quantidadeMaior(carrinho, 2))
console.log(quantidadeMaior2(carrinho, 3))

let carrinhoJSON = JSON.stringify(carrinho);
console.log(carrinhoJSON);