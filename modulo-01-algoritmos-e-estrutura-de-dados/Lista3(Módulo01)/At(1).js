/*
1. Crie um objeto representando um produto com as propriedades: nome, preço,
    categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
    propriedades e seus valores. Em seguida, adicione uma nova propriedade
    desconto ao objeto e exiba o preço final calculado.
*/

let produto = {
    nome: "Smartphone",
    preco: 1500,
    categoria: "Eletrônicos",
    quantidadeEmEstoque: 50
}

for (let propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`)
}

produto.desconto = 0.1
let precoFinal = produto.preco * (1 - produto.desconto)
console.log(`\nPreço final com desconto: ${precoFinal}`)