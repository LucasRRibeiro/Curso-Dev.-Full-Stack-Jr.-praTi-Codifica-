// Caso o objeto precisa ter mais de um objeto e não apenas propriedade para um só
// Os objetos podem ter arrays, para guardar mais informações e mais objetos,
// podendo criar diversos objetos caso seja necessário.

let alunos = [
    {
    nome: "Lucas",      //string
    idade: 25,          //number
    matriculado: true,  //boolean
    "notas dos alunos": [8, 8, 9],   //array - ficam dentro das aspas podendo utilizar caracter especial ou espaço
    "endereço":{                    //objeto - ç é uma caracter especial
    cidade: "Guairaçá",
    estado: "PR"
     }
    },
    {
    nome: "Fernando",      //string
    idade: 40,          //number
    matriculado: true,  //boolean
    "notas dos alunos": [6, 8, 9],   //array - ficam dentro das aspas podendo utilizar caracter especial ou espaço
    "endereço":{                    //objeto - ç é uma caracter especial
    cidade: "Guairaçá",
    estado: "PR"
     }
    }
]

// IN - Mostra os indices de cada objeto e os objetos que existem

for(let propriedade in alunos){
    console.log(`${propriedade}: ${alunos[propriedade]}\n`)
}

// OF - Mostra as propriedades de cada objeto e seu valor
// Posso substituir da variavel de controle de propriedade para o nome do objeto para facilitar
// como aluno
for(let aluno of alunos){
    console.log(`Nome: ${aluno.nome}`)
    console.log(`Matricula: ${aluno.matriculado}\n`)
}

