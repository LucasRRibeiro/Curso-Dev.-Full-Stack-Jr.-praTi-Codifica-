/*
8. Crie um array de objetos representando produtos com nome, preço e quantidade.
    Use forEach para calcular o valor total em estoque de cada produto (preço ×
    quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
    estoque.
*/

let valorTotalGeral = 0
let valorTotal = 0

let produtos = [
    { nome: "Camiseta", preco: 50, quantidade: 10 },
    { nome: "Calça", preco: 100, quantidade: 5 },
    { nome: "Tênis", preco: 150, quantidade: 3 },
    { nome: "Boné", preco: 30, quantidade: 20 },
    { nome: "Jaqueta", preco: 200, quantidade: 2 }
]

produtos.forEach(produto => {
    let valorTotal = produto.preco * produto.quantidade
    valorTotalGeral += valorTotal
    console.log(`\n${produto.nome} - Valor total em estoque: R$ ${valorTotal}`)
});

console.log(`\nValor total geral do estoque: R$ ${valorTotalGeral}`)