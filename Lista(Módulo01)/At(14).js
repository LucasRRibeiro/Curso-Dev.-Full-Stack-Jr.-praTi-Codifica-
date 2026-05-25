/*
14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
    sobre salário e número de filhos. Faça uma função que leia esses dados para um
    número não determinado de pessoas e retorne a média de salário da população, a
    média do número de filhos, o maior salário e o percentual de pessoas com salário até
    R$350,00.
*/

function mediaHabitantes(habitantes){
    let mediaSalario = 0
    let mediaFilhos = 0
    let maiorSalario = 0
    let percentualSalario = 0
    let somaSalario = 0
    let somaFilhos = 0

    for(let i = 0; i < habitantes.length; i++){
        somaSalario += habitantes[i].salario
        somaFilhos += habitantes[i].filhos

        if(habitantes[i].salario > maiorSalario){
            maiorSalario = habitantes[i].salario
        }
        if(habitantes[i].salario <= 350){
            percentualSalario++
        }
    }

    mediaSalario = somaSalario / habitantes.length
    mediaFilhos = somaFilhos / habitantes.length
    percentualSalario = (percentualSalario / habitantes.length) * 100

    return {
        mediaSalario,
        mediaFilhos,
        maiorSalario,
        percentualSalario
    }
}

const tec = require('prompt-sync')()

let habitantes = []
let resposta

while(true){

    habitantes.push({
        salario: parseFloat(tec('Digite o salário do habitante:')),
        filhos: parseInt(tec('Digite o número de filhos do habitante:'))
    })

    resposta = tec('Deseja continuar? (s/n): ')
    console.log()

    if(resposta === 'n' || resposta === 'N'){
        break
    }

}

const resultado = mediaHabitantes(habitantes)

console.log(`\nMédia de salário da população: R$${resultado.mediaSalario.toFixed(2)}`)
console.log(`Média do número de filhos: ${resultado.mediaFilhos.toFixed(2)}`)
console.log(`Maior salário: R$${resultado.maiorSalario.toFixed(2)}`)
console.log(`Percentual de pessoas com salário até R$350,00: ${resultado.percentualSalario.toFixed(2)}%`)