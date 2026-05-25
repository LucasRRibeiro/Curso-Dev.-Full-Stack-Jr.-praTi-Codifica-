/*
1 - Função sem parâmetros e sem retorno: Criar uma função simples que exiba uma
mensagem de saudação.
Instruções:
● Criar uma função chamada saudacao que não recebe parâmetros;
● Ex: A função deve exibir no console a mensagem "Olá, bem-vindo ao nosso sistema!";
● Chamar a função para que a saudação seja exibida.
*/

function saudacao(){
    console.log("Olá, bem-vindo ao nosso sistema!")
}

saudacao()

/*
2 - Função com parâmetros: Criar uma função que receba dois números como parâmetros
e retorne a soma, subtração, multiplicação e divisão desses números.
*/

function operacoes(a, b){
    let soma = a + b
    let subtracao = a - b
    let multiplicao = a * b
    let divisao = a / b

    /* 
     Poderia ser feito com o console.log aqui, evitando o uso de vetores:
     console.log(`Soma: ${soma}`)
     console.log(`Subtração: ${subtracao}`)
     console.log(`Multiplicação: ${multiplicao}`)
     console.log(`Divisão: ${divisao}`)
    */
    
    return [soma, subtracao, multiplicao, divisao]
}

let result = operacoes(5, 5)

console.log(`Soma: ${result[0]}`)
console.log(`Subtração: ${result[1]}`)
console.log(`Multiplicação: ${result[2]}`)
console.log(`Divisão: ${result[3]}`)