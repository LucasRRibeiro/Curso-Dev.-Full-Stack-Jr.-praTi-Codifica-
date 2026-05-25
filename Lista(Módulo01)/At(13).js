/*
13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
    seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    ○ Matrícula:
    ○ Nome:
    ○ Salário bruto:
    ○ Dedução INSS:
    ○ Salário líquido:
    ○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
    redução do INSS).
*/

const tec = require('prompt-sync')()

const inss = 0.12

let empregados = []

for(let i = 0; i < 3; i++){

    console.log(`\nFuncionário ${i + 1}º\n`)
    empregados.push({
        matricula: tec('Digite a matrícula do funcionário: '),
        nome: tec('Digite o nome do funcionário: '),
        salarioBruto: parseFloat(tec('Digite o salário bruto do funcionário: '))
    })

    empregados[i].descontoInss = empregados[i].salarioBruto * inss
    empregados[i].salarioLiquido = empregados[i].salarioBruto - empregados[i].descontoInss
}


for(let i = 0; i < empregados.length; i++){

    console.log(`\nContracheque do Funcionário ${i + 1}º`)
    console.log(`\nMatrícula: ${empregados[i].matricula}`)
    console.log(`Nome: ${empregados[i].nome}`)
    console.log(`Salário bruto: ${empregados[i].salarioBruto.toFixed(2)}`)
    console.log(`Dedução INSS: ${empregados[i].descontoInss.toFixed(2)}`)
    console.log(`Salário líquido: ${empregados[i].salarioLiquido.toFixed(2)}`)
    console.log('------------------------')
}