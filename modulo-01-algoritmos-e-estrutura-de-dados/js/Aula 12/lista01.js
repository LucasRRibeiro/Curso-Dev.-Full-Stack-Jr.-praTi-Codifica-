/*
    Um estacionamento cobra por faixas de tempo. Faça um programa que leia quantas horas um veículo ficou estacionado e, usando switch case com intervalos, calcule o valor a pagar conforme a tabela:
    la hora R$ 8,00; 2a hora R$ 6,00;
    3a hora R$ 4,00;
    1 acima de 3 horas R$ 4,00 pelas primeiras 3 horas mais R$ 2,00 por hora adicional.
    Exiba o tempo total e o valor cobrado.
 */

    const tec = require('prompt-sync')()

    let horas = parseInt(tec('Quantas horas o veículo ficou estacionado? '))
    
    if(!horas || horas < 1) {
        console.log('Valor inválido. Por favor, insira um número inteiro positivo.')
    }
    else {
        let valor = 0
        let extras = 0

        switch(true) {
            case horas === 1:
                valor = 8
                break
            case horas === 2:
                valor = 8 + 6
                break
            case horas === 3:
                valor = 8 + 6 + 4
                break

            default:
                valor = 8 + 6 + 4
                extras = horas - 3
                valor += extras * 2
                break
        }

        console.log(`Tempo total: ${horas} horas`)
        console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`)
    }

/*
15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
    principal são iguais a 1 e os demais são nulos.
*/

let matriz = []

// percorre as linhas
for(let i = 0; i < 7; i++){
    // para cada linha, cria uma nova array para representar as colunas da matriz 
    matriz[i] = []

    // percorre as colunas da linha atual 
    for(let j = 0; j < 7; j++){
        // verifica se estamos na diagonal principal (onde i é igual a j)
        if(i === j){
            matriz[i][j] = 1
        } else {
            matriz[i][j] = 0
        }
    }
}

console.table(matriz)

for(let i = 0; i < 7; i++){
    let linha = " "
    for(let j = 0; j < 7; j++){
        linha += matriz[i][j] + " "
    }
    console.log(linha)
}

/*
    Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba o nome do mês correspondente e 
    quantos dias ele possui. Para fevereiro, pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias 
    para 29 caso seja.
 */

    let mes = parseInt(tec('Digite o número do mês (1 a 12): '))

    let nome = ""
    let dias = 0

    switch(mes) {
        case 1:
            nome = "Janeiro"
            dias = 31
            break
        case 2: 
            nome = "Fevereiro"
            let bissexto = tec('O ano é bissexto? (s/n): ').toLowerCase()
            if(bissexto === 's') {
                dias = 29
            } else {
                dias = 28
            }
            break
        case 3:
            nome = "Março"
            dias = 31
            break
        case 4:
            nome = "Abril"
            dias = 30
            break
        case 5:
            nome = "Maio"
            dias = 31
            break
        case 6:
            nome = "Junho"
            dias = 30
            break
        case 7:
            nome = "Julho"
            dias = 31
            break
        case 8:
            nome = "Agosto"
            dias = 31
            break
        case 9:
            nome = "Setembro"
            dias = 30
            break
        case 10:
            nome = "Outubro"
            dias = 31
            break
        case 11:
            nome = "Novembro"
            dias = 30
            break
        case 12:
            nome = "Dezembro"
            dias = 31
            break
        default:
            console.log("Mês inválido.")
    }

    if(nome) {
        console.log(`Mês: ${nome}, Dias: ${dias}`)
    }

/*
16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
    quantidade de elementos negativos da linha correspondente de M.
*/

 matriz = [
  [1, -2, 3, -4, 5, -6, 7, -8],
  [-1, 2, -3, 4, -5, -6, -7, -8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [-1, -2, -3, -4, -5, -6, -7, -8],
  [1, -2, 3, -4, 5, -6, 7, -8],
  [-1, 2, -3, -4, -5, 6, -7, 8]
]

console.log('Matriz M:')
console.table(matriz)

let vetorC = []

for (let i = 0; i < matriz.length; i++){
    vetorC[i] = 0;
    for(let j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] < 0){
            vetorC[i]++
        }
    }
}

console.log('\nVetor C (quantidade de elementos negativos por linha):')
console.table(vetorC)

/*
    6. Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que deseja sacar (múltiplo de 10). 
    O programa deve calcular e exibir a menor quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias
     para compor o saque.
*/

    let valor = parseInt(tec('Digite o valor a sacar (múltiplo de 10): '))

    if(!valor || valor < 10 || valor % 10 !== 0) {
        console.log("Valor inválido. Por favor, digite um valor múltiplo de 10.")
    } else {
       let notas100 = Math.floor(valor / 100)
       restante = valor % 100

       let notas50 = Math.floor(restante / 50)
       restante = restante % 50

       let notas20 = Math.floor(restante / 20)
       restante = restante % 20

       let notas10 = Math.floor(restante / 10)
         restante = restante % 10

        let totalCedulas = notas100 + notas50 + notas20 + notas10

        console.log(`Valor a sacar: R$ ${valor}`)
        console.log(`Cédulas de R$ 100: ${notas100}`)
        console.log(`Cédulas de R$ 50: ${notas50}`)
        console.log(`Cédulas de R$ 20: ${notas20}`)
        console.log(`Cédulas de R$ 10: ${notas10}`)
        console.log(`Total de cédulas: ${totalCedulas}`)
    }