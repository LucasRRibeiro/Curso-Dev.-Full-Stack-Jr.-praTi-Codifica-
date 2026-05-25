/*
    Contagem de números pares: Usar o laço for para contar quantos números pares 
    existem em um array de números.
*/

let numeros = [1 , 4, 5, 65, 43, 5, 345, 34, 23, 4, 87, 98]
let cont = 0

for(let i = 0; i < numeros.length; i++){

    if(numeros[i] % 2 == 0){
        console.log(numeros[i])
        cont += 1
    }
}

console.log(`A quantidade de números pares são ${cont}`)