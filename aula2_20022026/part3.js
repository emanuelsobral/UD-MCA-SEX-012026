// Criação do Array de Objetos (10 elementos)
let catalogoDeJogos = [
    { nome: 'Stardew Valley', preco: 24.99, estoque: 150 },
    { nome: 'Hollow Knight', preco: 46.99, estoque: 80 },
    { nome: 'Elden Ring', preco: 229.90, estoque: 300 },
    { nome: 'Cyberpunk 2077', preco: 199.90, estoque: 45 },
    { nome: 'Baldurs Gate 3', preco: 199.99, estoque: 500 },
    { nome: 'Terraria', preco: 32.99, estoque: 200 },
    { nome: 'Hades', preco: 73.99, estoque: 120 },
    { nome: 'Celeste', preco: 59.99, estoque: 60 },
    { nome: 'Resident Evil 4', preco: 249.00, estoque: 250 },
    { nome: 'The Witcher 3', preco: 119.99, estoque: 90 }
];

console.log("--- RESPOSTAS PARTE 3 ---");

// A. Qual é o preço do segundo objeto? (Índice 1)
console.log("A: Preço do segundo objeto: R$", catalogoSteam[1].preco);

// B. Qual é o nome do terceiro objeto? (Índice 2)
console.log("B: Nome do terceiro objeto:", catalogoSteam[2].nome);

// C. Quantos itens existem no array?
console.log("C: Total de itens no array:", catalogoSteam.length);

// D. Imprima o nome de todos os objetos.
console.log("D: Nome de todos os objetos:");
for (let i = 0; i < catalogoSteam.length; i++) {
    console.log(`- ${catalogoSteam[i].nome}`);
}

// E. Some o total de estoque de todos os objetos.
let totalEstoque = 0;
for (let i = 0; i < catalogoSteam.length; i++) {
    totalEstoque += catalogoSteam[i].estoque;
}
console.log("E: Total de estoque de todos os objetos:", totalEstoque);

// F. Qual objeto possui maior estoque?
let maiorEstoque = catalogoSteam[0];
for (let i = 1; i < catalogoSteam.length; i++) {
    if (catalogoSteam[i].estoque > maiorEstoque.estoque) {
        maiorEstoque = catalogoSteam[i];
    }
}
console.log(`F: Objeto com maior estoque: ${maiorEstoque.nome} (Estoque: ${maiorEstoque.estoque})`);