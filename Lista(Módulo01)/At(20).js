/*
20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
    número de vezes que a string aparece no array.
*/

function contadorArray(item){
    let contador = {}
    for(let i = 0; i < item.length; i++){
        if(contador[item[i]]){
            contador[item[i]]++
        }
        else {
            contador[item[i]] = 1
        }
    }
    return contador
}

let frutas = ['maçã', 'banana', 'laranja', 'maçã', 'uva', 'banana', 'maçã']

console.table(contadorArray(frutas))
