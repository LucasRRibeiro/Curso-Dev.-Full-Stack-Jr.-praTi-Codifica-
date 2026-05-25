let numeros = [10, 20, 30, 40, 50]

let numeroProcurado = 40
let encontrado = false
let indice = 0

for(let i = 0; i < numeros.length; i++){

    if(numeroProcurado == numeros[i]){
        indice = numeros.indexOf(numeroProcurado) //Outra opção para encontrar o índice do elemento
        console.log(`O valor ${numeroProcurado} foi encontrado no índice [${indice}] do vetor`)
        encontrado = true
    }
    /*else{
        console.log(`O valor ${numeroProcurado} não foi encontrado no vetor`) //Uma opção com break
        break
    }
        */
}

if(!encontrado){

    console.log(`O valor ${numeroProcurado} não foi encontrado no vetor`)

}
