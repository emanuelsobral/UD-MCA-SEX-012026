// Criação do Objeto
let pecaCarro = {
    nome: 'Amortecedor Dianteiro Gol G5 2009',
    cor: 'Preto',
    preco: 189.90,
    estoque: 12
};

console.log("--- RESPOSTAS PARTE 2 ---");

// A. Como acessar o nome do objeto?
console.log("A: Acessando o nome:", pecaCarro.nome);

// B. Como acessar o preço usando colchetes?
console.log("B: Acessando o preço com colchetes: R$", pecaCarro['preco']);

// C. Atualize o estoque para 80.
pecaCarro.estoque = 80;
console.log("C: Estoque atualizado para:", pecaCarro.estoque);

// D. Imprima todas as propriedades no console.
console.log("D: Imprimindo todas as propriedades:");
for (let propriedade in pecaCarro) {
    console.log(`${propriedade}: ${pecaCarro[propriedade]}`);
}