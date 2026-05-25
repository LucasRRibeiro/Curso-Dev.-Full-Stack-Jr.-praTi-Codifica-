/*
10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
    mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
    que eles foram informados.
*/

const tec = require('prompt-sync')()
let nomes = []

for(let i = 0; i < 7; i++){
    nomes[i] = tec(`Digite o nome da ${i+1}ª pessoa:`)
}

console.log('\nNomes na ordem inversa:\n')

for(let i = nomes.length - 1; i >= 0; i--){
    console.log(`${i + 1}ª pessoa: ${nomes[i]}`)
}