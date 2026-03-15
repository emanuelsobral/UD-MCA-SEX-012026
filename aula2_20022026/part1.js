// Criação do Array com 21 elementos
let jogosPc = [
    'Elden Ring', 'Hollow Knight', 'Cyberpunk 2077', 'Stardew Valley', 'The Witcher 3', 
    'Red Dead Redemption 2', 'Sekiro', 'Baldurs Gate 3', 'Terraria', 'Celeste', 
    'Hades', 'Persona 5 Royal', 'God of War', 'Dark Souls 3', 'Resident Evil 4', 
    'Doom Eternal', 'Nier Automata', 'RimWorld', 'Disco Elysium', 'Outer Wilds', 
    'Factorio'
];

console.log("--- RESPOSTAS");

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("A: Qual elemento está na posição 0, 7, 11, 15, 18 e 20?:", jogosPc[0], ",", jogosPc[7], ",", jogosPc[11], ",", jogosPc[15], ",", jogosPc[18], ",", jogosPc[20]);

// B. Qual elemento está na penúltima e última posição?
console.log("B: Qual elemento está na penúltima e última posição?:", jogosPc[jogosPc.length - 2], "| Última ->", jogosPc[jogosPc.length - 1]);

// C. Quantos elementos existem no array?
console.log("C: Quantos elementos existem no array?:", jogosPc.length);

// D. Adicione um novo elemento ao final do array.
jogosPc.push('Dragons Dogma 2');
console.log("D: Adicione um novo elemento ao final do array:", jogosPc.length);

// E. Imprima todos os elementos usando um for.
console.log("E: Lista de todos os elementos:");
for (let i = 0; i < jogosPc.length; i++) {
    console.log(`[${i}] ${jogosPc[i]}`);
}