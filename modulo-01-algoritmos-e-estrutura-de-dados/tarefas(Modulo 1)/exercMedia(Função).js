/*
    1. Função com parâmetros e retorno: Criar uma função que calcule a média de três notas
    passadas como parâmetros.
    Instruções:
    Criar uma função que receba três parâmetros (nota1, nota2,nota3);
    A função deve calcular a média das três notas e retornar o valor;
    Chamar a função e exibir a média no console.
*/

function calcularMedia(nota1, nota2, nota3){
    media = (nota1 + nota2 + nota3) / 3

    return media
}

let mediaFinal = calcularMedia(8, 10, 9)  // valor para teste

console.log(`Média final do aluno: ${mediaFinal}`)

