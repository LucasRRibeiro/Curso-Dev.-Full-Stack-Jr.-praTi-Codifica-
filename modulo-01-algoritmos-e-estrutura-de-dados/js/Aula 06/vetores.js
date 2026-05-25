//VETOR - ARRAY
//Valores - 3, 45, 65, 21, 2
//Indíces - 0, 1, 2, 3, 4
let numeros = [3, 45, 65, 21, 2]
let frutos = ["maçã", "banana", "abacaxi"]
let vazio = []

vazio[1] = 5 // Adiciona o valor no indíce indicado
vazio[0] = 30
vazio.push(40) // Adiciona no fim do vetor

frutos.push("uva") //frutos.push(5) - vai quebrar o array, pois está trabalhando com outra tipagem

frutos.pop() //Excluir o ultimo valor do vetor

frutos.unshift("pera") //Adiciona o valor no início do vetor

console.log(numeros)
console.log(frutos)
console.log(vazio)

/* Forma ruim de mostrar dados do array
    console.log(numeros[0])
    console.log(frutos[2])
    console.log(vazio[1])

   Vamos utilizar o laço de repetição para mostrar os dados do array
*/

for(let i = 0; i < numeros.length; i++){
    //console.log("A posição " + "[" + i + "]" + " tem o valor: " + numeros[i]) jeito ruim de concatenar (juntar texto com variáveis)
    console.log(`A posição [${i}] tem o valor: ${numeros[i]}`) // Jeito mais otimizado/organizado e visual
}

// Função para mostrar todos os valores do array

numeros.forEach(function(numeros){
    console.log(numeros)
})

for(let i in numeros){
    console.log(numeros[i])
}