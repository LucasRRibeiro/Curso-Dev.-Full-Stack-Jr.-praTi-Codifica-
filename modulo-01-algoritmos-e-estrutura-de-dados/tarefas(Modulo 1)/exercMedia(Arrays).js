let notas = [8, 7, 9, 10, 6]
let soma = 0

for(let i = 0; i < notas.length; i++){
    
    soma += notas[i]

}

media = soma / notas.length

console.log(`A média das notas é: ${media}`)