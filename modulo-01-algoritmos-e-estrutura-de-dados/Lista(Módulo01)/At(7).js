/*
7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
   média aritmética desses números.
*/
const tec = require('prompt-sync')()
let num
let soma = 0
let contador = 0

console.log("Digite números decimais para calcular a média. (Digite 0 para finalizar):\n") 

while(true){

   num = Number(tec(`${contador + 1}º valor: `))

   if(num == 0){
      break
   }

   soma += num

   contador++
}

media = soma / contador

console.log(`\nA Média Aritmética é ${media.toFixed(2)}`)
