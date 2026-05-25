/*
    3. Função com parâmetros e retorno: Criar uma função que receba dois números e um
    operador e retorne o resultado da operação.
    Instruções:
    Criar uma função chamada calculadora que receba três parâmetros: num1, num2 e operador.
    O operador pode ser um dos seguintes: + (soma), - (subtração), *(multiplicação), / (divisão);
    A função deve retornar o resultado da operação;
    Chamar a função com diferentes operadores e exibir os resultados no console.
*/

function calculadora(num1, num2, operador){

    if(operador == "+"){
        let soma = num1 + num2
        return `Soma: ${soma}`
    }
    else if(operador == "-"){
        let subtracao = num1 - num2
        return `Subtração: ${subtracao}`
    }
    else if(operador == "*"){
        let multiplicacao = num1 * num2
        return `Multiplicação: ${multiplicacao}`
    }
    else if(operador == "/"){
        let divisao = num1 / num2
        return `Divisão: ${divisao}`
    }
    else{
        return "Operador Inválido: Use +, -, * ou /"
    }

}

let x = 10 // valor para teste
let y = 10 // valor para teste
let operador = "*" // valor para teste

console.log(calculadora(x, y, operador))