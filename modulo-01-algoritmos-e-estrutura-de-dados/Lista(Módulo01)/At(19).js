/*
19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
    combinando as propriedades de ambos, onde as propriedades de obj2 têm
    precedência sobre as do obj1 em caso de conflitos.
*/
function combinarObjetos(obj1, obj2) {
    let obj3 = {}

    for(let i in obj1){
        obj3[i] = obj1[i]
    }

    for(let i in obj2){
        obj3[i] = obj2[i]
    }

    return obj3
}

let obj1 = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo',
    email: 'lucasrodrigues1234@gmail.com',
    telefone: '11987654321',
    profissao: 'Desenvolvedor',
    empresa: 'Tech Solutions',
    salario: 5000,
    hobbies: ['programação', 'jogos', 'música'],
}

let obj2 = {
    matricula: '12345',
    nome: 'Lucas Rodrigues Ribeiro',
    idade: 26,
    materia: 'JavaScript',
    email: 'lucasrodrigues5678@empresa.com.br',
    telefone: '11987654321',
    profissao: 'Desenvolvedor-Junior'
}

let obj3 = combinarObjetos(obj1, obj2)

console.log(obj3)