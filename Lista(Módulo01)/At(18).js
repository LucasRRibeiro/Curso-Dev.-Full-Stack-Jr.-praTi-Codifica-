/*
18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
    strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
    propriedades que são arrays.
*/

function filtrarArrays(objeto){
    let arrays = {}

    for(let i in objeto){
        if(Array.isArray(objeto[i])){
            arrays[i] = objeto[i]
        }
    }
    return arrays
}

let dados = {
    nome: 'Lucas',
    idade: 25,
    hobbies: ['programar', 'jogar', 'viajar'],
    contatos: {
        email: 'lucasrodrigues1234@gmail.com',
        telefone: '123456789'
    },
    cursos: ['JavaScript', 'Python', 'Java']
}

console.log(filtrarArrays(dados))