let aluno = {
    nome: "Carlos",
    idade: 45,
    nota: 5,
    atualizarNota: function(novaNota){ // Chamado de MÉTODO
        this.nota = novaNota // this está referenciado o próprio objeto . sua propriedade e ele é usado dentro do objeto, 
                             // então ele é igual aluno.nota, mas como esta dentro desse objeto, então usamos this
    }

}

console.log(`Nota do aluno ${aluno.nome}: ${aluno.nota}`)

aluno.atualizarNota(9)

console.log(`Nota atualizada do aluno ${aluno.nome}: ${aluno["nota"]}`)

// Outra maneira de acessar dados e ver informações do meu array/objeto
// Entries - retorna um array de pares (chave - valor), para ver as propriedades
// do objeto.

const entradas = Object.entries(aluno)

console.log(entradas)

// E caso utilizade o for in com um objeto com arrays:

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

//Mostrar propriedades do objeto que possui um array

for(let [chave, valor] of Object.entries(alunos)){
    console.log(`${chave} ${valor.nome}`)
    console.log(`${valor.idade}\n`)
}

//Mostrar todos objetos presentes no array

alunos.forEach(function(alunos){
    console.log(alunos)
})