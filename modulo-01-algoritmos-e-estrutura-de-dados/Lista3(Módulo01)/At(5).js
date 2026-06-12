/*
5. Crie um objeto representando o orçamento mensal de uma pessoa, com
    categorias como alimentação, transporte, lazer e saúde, cada uma com valor
    planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
    uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.
*/

let planejado
let gasto
let saldoGeral = 0

let orcamento = {
    alimentacao: { planejado: 800, gasto: 750 },
    transporte: { planejado: 300, gasto: 350 },
    lazer: { planejado: 200, gasto: 150 },
    saude: { planejado: 400, gasto: 450 }
}

for (let categoria in orcamento) {
    planejado = orcamento[categoria].planejado
    gasto = orcamento[categoria].gasto

    if (gasto <= planejado) {
        console.log(`\n${categoria}: Dentro do orçamento (Gasto: R$ ${gasto}, Planejado: R$ ${planejado})`)
    }
    else {
        console.log(`\n${categoria}: Acima do orçamento (Gasto: R$ ${gasto}, Planejado: R$ ${planejado})`)
    }
}

for (let categoria in orcamento) {
    saldoGeral += orcamento[categoria].planejado - orcamento[categoria].gasto
}

console.log(`\nSaldo geral do mês: R$ ${saldoGeral}`)

