/*
12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
    e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
    ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const tec = require('prompt-sync')()

function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal
    if(sexo === 'M' || sexo === 'm') {
        pesoIdeal = (72.7 * altura) - 58
        return pesoIdeal
    }
    else if(sexo === 'F' || sexo === 'f') {
        pesoIdeal = (62.1 * altura) - 44.7
        return pesoIdeal
    }
    else {
        return "Sexo inválido. Por favor, informe 'M' para masculino ou 'F' para feminino."
    }
}

console.log("Calculadora de Peso Ideal\n")

let altura = Number(tec("Digite a altura da pessoa (em metros):"))
let sexo = tec("Digite o sexo da pessoa (M para masculino, F para feminino):")

while(true) {
    if(sexo === 'M' || sexo === 'm' || sexo === 'F' || sexo === 'f') {
        break
    }
    console.log("\nSexo inválido. Por favor, informe 'M' para masculino ou 'F' para feminino.")
    sexo = tec("Digite o sexo da pessoa (M para masculino, F para feminino):")
}

let pesoIdeal = calcularPesoIdeal(altura, sexo)

console.log(`O peso ideal para a pessoa é: ${pesoIdeal.toFixed(2)} kg`)

