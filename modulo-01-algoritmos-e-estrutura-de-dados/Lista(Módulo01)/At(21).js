/*
21. Suponha que você tem um array de objetos onde cada objeto representa uma venda
    com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
    de vendas por vendedor.
*/

function sumarizarVendas(vendas) {
    let resumo = {}
    for (let i = 0; i < vendas.length; i++) {     
        if (resumo[vendas[i].vendedor]) {
            resumo[vendas[i].vendedor] += vendas[i].valor
        } else {
            resumo[vendas[i].vendedor] = vendas[i].valor
        }
    }

    return resumo
}

let vendas = [{
    vendedor: 'João',
    valor: 100
},
{
    vendedor: 'Maria',
    valor: 150
},
{
    vendedor: 'João',
    valor: 200
},
{
    vendedor: 'Maria',
    valor: 250
},
{
    vendedor: 'Pedro',
    valor: 300
}]


console.table(sumarizarVendas(vendas))