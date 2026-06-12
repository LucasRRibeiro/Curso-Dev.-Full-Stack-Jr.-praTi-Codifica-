/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
   Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const tec = require('prompt-sync')()

console.log("   Menu Interativo: \n\n 1º Digitar seu nome \n 2º Informar a idade \n 3º Sair")

let opcao = Number(tec("\n Informe a opção desejada:"))

switch(opcao){
   case 1:
      let nome = String(tec("\n Informe seu nome:"))
      console.log(`\n Seu nome é ${nome}`)
      break
   case 2:
      let idade = Number(tec("\n Informe sua idade:"))  
      console.log(`\n Sua idade é ${idade}`)
      break
   case 3:
      console.log("\n Sistema encerrado...")
      break
   default:
      console.log("\n Valor inválido!")
      break
}
