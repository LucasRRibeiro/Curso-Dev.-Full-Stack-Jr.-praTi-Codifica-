/*
8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
   um loop for ou while.
*/

const tec = require("prompt-sync")()

let valor = Number(tec("Digite um número para calcular o fatorial:"))
let fatorial = 1

for(let i = 2; i <= valor; i++){

    console.log(`\nCalculando: ${fatorial} x ${i} = ${fatorial * i}`)
    fatorial *= i

}

if(valor < 0){
    console.log("\nNão é possível calcular o fatorial de um número negativo.")
}
else{
    console.log(`\nO fatorial de ${valor}: ${fatorial}`)
}