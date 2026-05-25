/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
   "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const tec = require('prompt-sync')()

let nota = Number(tec("Informe sua nota (Entre 0 e 10):"))

if(nota >= 0 && nota <= 10){
    if(nota >= 7){
        console.log(`Nota: ${nota} \nAprovado`)
    }
    else if(nota >= 5 && nota < 7){
        console.log(`Nota: ${nota}\nRecuperação`)
    }
    else{
        console.log(`Nota: ${nota}\nReprovado`)
    }
}
else{
    console.log(`Nota: ${nota} \nInválida`)
}