/*
16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
    quantidade de elementos negativos da linha correspondente de M.
*/

let matriz = [
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