/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
    formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
    Isósceles, escaleno ou eqüilátero.
    ● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C <
    A + B
    ● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    ● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    ● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const tec = require('prompt-sync')()

console.log("Informe o valor dos lados do triângulo:")

let a = Number(tec("1º Valor:"))
let b = Number(tec("2º Valor:"))
let c = Number(tec("3º Valor:"))

if((a + b) > c && (b + c) > a && (a + c) > b){
    console.log("Esses lados formam um triângulo")
    if(a === b && b === c){
        console.log("O triângulo é eqüilátero")
    }
    else if(a === b || a === c || b === c){
        console.log("O triângulo é isósceles")
    }
    else{
        console.log("O triângulo é escaleno")
    }
}
else{
    console.log("Esses lados não formam um triângulo")
}