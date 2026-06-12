/*
11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
    dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
    os dados das pessoas menores de idade.
*/

const tec = require('prompt-sync')()

let nomes = []
let idades = []

for(let i = 0; i < 9; i++){
    nomes[i] = tec(`Nome da ${i+1}ª pessoa:`)
    idades[i] = Number(tec(`Idade da ${i+1}ª pessoa:`))
}

for(let i = 0; i < nomes.length; i++){
    
    if(idades[i] < 18){
        console.log(`\n${nomes[i]} é menor de idade, com ${idades[i]} anos.`)
    }
}

