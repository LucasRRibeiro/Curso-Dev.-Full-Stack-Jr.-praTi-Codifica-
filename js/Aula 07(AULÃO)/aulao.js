//npm Node Package Manager
//install comando do Node para instalar pacotes
//npm install nome do pacote

//package.json é o arquivo de configuração do projeto, onde ficam as dependências e scripts
//package-lock.json é o arquivo que registra as versões exatas das dependências instaladas
//node_modules é a pasta onde ficam as dependências instaladas

const PROMPT = require('prompt-sync')()

/*
Outra opção:
const promptSync = require('prompt-sync');
const prompt = promptSync();
*/

//prompt-sync é um pacote que permite ler input do usuário no terminal de forma síncrona
//para usar o prompt-sync, é necessário instalar o pacote usando npm install prompt-sync

// //Exemplo de uso do prompt-sync
// const nome = PROMPT('Digite seu nome: ')
// console.log(`Olá, ${nome}!`)

// //Tabuada com PROMPT

// let valor = Number(PROMPT('digite um valor: '))

// for(let i = 1; i <= 10; i++){
//     console.log(`${valor} x ${i} = ${valor * i}`)
// }


//ARRAYS OU VETOR

let itens = ['headset', 'videogame', 'cadeira']

itens.shift() //remove o primeiro elemento do array

console.log(itens)

itens.unshift('teclado') //adiciona um elemento no início do array

console.log(itens)

itens.push('monitor') //adiciona um elemento no final do array

console.log(itens)

itens.pop() //remove o último elemento do array

console.log(itens)

itens.splice(1, 1) //remove o elemento do índice 1 (videogame) e remove 1 elemento

console.log(itens)

itens.splice(1, 0, 'mouse') //adiciona o elemento 'mouse' no índice 1 (entre teclado e cadeira) e remove 0 elementos

console.log(itens)

let copiar = itens.slice() //copia o array itens para a variável copiar

console.log(copiar)

let indice = itens.indexOf('mouse') //retorna o índice do elemento 'mouse' no array itens

console.log(indice)

//arrays bidimensionais

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.table(matriz) //1

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j])
    }
}