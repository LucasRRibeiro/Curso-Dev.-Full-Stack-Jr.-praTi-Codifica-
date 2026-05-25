/*
9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
   Fibonacci utilizando um loop for.
*/
let a = 0
let b = 1
let temp = 0

for (let i = 1; i <= 10; i++) {
    console.log(a)
    temp = a + b
    a = b
    b = temp
}