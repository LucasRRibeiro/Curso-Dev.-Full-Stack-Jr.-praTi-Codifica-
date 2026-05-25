/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
   determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
   utilizando if-else.
*/

const tec = require('prompt-sync')()

console.log("CALCULADORA DE IMC \n")
let peso = Number(tec("Informe seu peso:"))
let altura = Number(tec("Informe sua altura:"))

let imc = peso / (Math.pow(altura, 2))

console.log(`Seu IMC é ${imc.toFixed(2)} \n`)

if(imc < 18.5){
   console.log("Você está com baixo peso!")
}
else if(imc >= 18.5 && imc < 25){
    console.log("Você está com peso normal!")
}
else if(imc >= 25 && imc < 30){
    console.log("Você está com sobrepeso!")
}
else{
    console.log("Você está com obesidade!")
}