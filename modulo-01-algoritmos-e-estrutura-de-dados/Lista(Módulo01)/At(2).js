/*
2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
   adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
   controle if-else.
*/

const tec = require('prompt-sync')()

let idade = Number(tec("Informe sua idade:"))

if(idade > 0 && idade < 12){
    console.log(`Idade: ${idade} \nVocê é uma criança`)
}
else if(idade >= 12 && idade < 18){
    console.log(`Idade: ${idade} \nVocê é um adolescente`)
}
else if(idade >= 18 && idade < 60){
    console.log(`Idade: ${idade} \nVocê é um adulto`)
}
else if(idade >= 60){
    console.log(`Idade: ${idade} \nVocê é um idoso`)
}
else{
    console.log(`Idade: ${idade} \nIdade inválida!!!`)    
}
