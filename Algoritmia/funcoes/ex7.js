function exibirMensagem(palavra, N = 1) {
    let mensagem = ""
    for (let i = 0; i < N; i++){
        mensagem += palavra;
    }
    return mensagem
}

console.log(exibirMensagem("Olá"));
console.log(exibirMensagem("Olá", 3));