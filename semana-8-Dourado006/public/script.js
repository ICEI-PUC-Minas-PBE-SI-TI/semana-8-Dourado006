// ==========================================
// B.1. Definição dos dados (JSON)
// ==========================================
const catalogo = [
    { id: 1, titulo: "Velozes e Furiosos", tipo: "filme", ano: 2001, generos: ["Ação"], nota: 8.5, assistido: true },
    { id: 2, titulo: "+ Velozes + Furiosos", tipo: "filme", ano: 2003, generos: ["Ação"], nota: 7.0, assistido: true },
    { id: 3, titulo: "Velozes e Furiosos: Desafio em Tóquio", tipo: "filme", ano: 2006, generos: ["Ação", "Corrida"], nota: 7.5, assistido: false },
    { id: 4, titulo: "Breaking Bad", tipo: "serie", ano: 2008, generos: ["Crime", "Drama"], nota: 9.5, assistido: true },
    { id: 5, titulo: "The Matrix", tipo: "filme", ano: 1999, generos: ["Ficção"], nota: 8.7, assistido: true },
    { id: 6, titulo: "Stranger Things", tipo: "serie", ano: 2016, generos: ["Terror"], nota: 8.7, assistido: false }
];

// ==========================================
// B.2. Acesso e leitura dos dados
// ==========================================
console.log("--- B.2: Acesso ---");
console.log("Catálogo completo:", catalogo);
console.log("Título do primeiro:", catalogo[0].titulo);
console.log("Ano do último:", catalogo[catalogo.length - 1].ano);
const g2 = catalogo[2].generos[1];
console.log("2º gênero do 3º item:", g2 ? g2 : "Apenas um gênero disponível.");

// ==========================================
// B.3. Iterações com iterators
// ==========================================
console.log("\n--- B.3: Iterators ---");

// A) forEach
console.log("Listagem de Títulos:");
catalogo.forEach(item => console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`));

// B) map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em Maiúsculo:", titulosEmCaixaAlta);

// C) filter
const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Quantidade não assistidos:", naoAssistidos.length);

// D) find
const notaAlta = catalogo.find(item => item.nota >= 9);
console.log("Primeiro item nota >= 9:", notaAlta ? `${notaAlta.titulo} (${notaAlta.nota})` : "Nenhum");

// E) reduce
const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;
const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;
console.log(`Média Geral: ${mediaGeral.toFixed(2)} | Média Assistidos: ${mediaAssistidos.toFixed(2)}`);

// F) some e every
console.log("Existe item antes de 2000?", catalogo.some(item => item.ano < 2000));
console.log("Todos possuem gênero?", catalogo.every(item => item.generos.length > 0));

// ==========================================
// B.4. Saída na tela (DOM)
// ==========================================
const output = document.getElementById("output");
const lista = document.getElementById("lista-filmes");

const qtdFilmes = catalogo.filter(i => i.tipo === "filme").length;
const qtdSeries = catalogo.filter(i => i.tipo === "serie").length;
const ranking = [...catalogo].sort((a, b) => b.nota - a.nota).slice(0, 3);

// Resumo textual conforme pedido
output.innerHTML = `
    <h3>Resumo do Sistema</h3>
    <p><strong>Total de itens:</strong> ${catalogo.length}</p>
    <p><strong>Filmes:</strong> ${qtdFilmes} | <strong>Séries:</strong> ${qtdSeries}</p>
    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>
    <hr>
    <h4>Top 3 Ranking:</h4>
    <ol>
        ${ranking.map(r => `<li>${r.titulo} (Nota: ${r.nota})</li>`).join("")}
    </ol>
`;

// Listagem simples em cards
lista.innerHTML = catalogo.map(item => `
    <div style="background: #fff; border: 1px solid #ccc; padding: 15px; border-radius: 5px; width: 200px;">
        <h4 style="margin: 0;">${item.titulo}</h4>
        <p style="font-size: 0.8rem; color: #666;">${item.tipo} - ${item.ano}</p>
        <p>Nota: ${item.nota}</p>
        <p style="font-size: 0.7rem;">${item.assistido ? "✅ Assistido" : "⏳ Pendente"}</p>
    </div>
`).join("");''