// Objetos - tipo de variavel/ Coleção de dados e funcionalidades de metodos que sempre estarao agrupados 
// em uma unica unidade.

// Eles são compostos por propriedades e métodos. Propriedades são as características do objeto, 
// enquanto os métodos são as ações que o objeto pode realizar.

// Permite organizar dados complexos (muitas informações relacionadas) de forma estruturada e fácil de acessar. 
// sendo mais facil de manter e utilizar em comparação com variáveis simples.

// Reaproveitar código, pois os objetos podem ser usados para criar múltiplas instâncias com as mesmas propriedades e métodos,

// Objeto - é um tipo de variável.

// Exemplo de objeto:

/* let objeto = {
    propriedade1: "valor1", // propriedade - ex: o objeto ALUNO, tem a propriedade nome, com valor LUCAS
    propriedade2: "valor2",
    }
*/

// Criação do objeto:

// let aluno = {
//     nome: "Lucas",      //string
//     idade: 25,          //number
//     matriculado: true,  //boolean
//     notas: [8, 8, 9],   //array
//     endereco:{          //objeto
//         cidade: "Guairaçá",
//         estado: "PR"
//     }
// }

// Criando objeto vazio

let produto = {}

//Adicionando valores dentro do objeto vazio [objeto.propriedade = valor1]
console.log(produto)
produto.nome = "Camiseta"
produto.preco = 49.90
produto.quantidadeEstoque = 100
produto.descricao = "Camiseta de algodão"
console.log(produto)

//alterar valor de uma propriedade e mostrar apenas ela
produto.preco = 20.00
console.log(produto.preco)

// Forma de alterar dados e declarar em objetos NÃO CONVENCIONAL (propriedades com caracter especial ou espaços)

let aluno = {
    nome: "Lucas",      //string
    idade: 25,          //number
    matriculado: true,  //boolean
    "notas dos alunos": [8, 8, 9],   //array - ficam dentro das aspas podendo utilizar caracter especial ou espaço
    "endereço":{                    //objeto - ç é uma caracter especial
        cidade: "Guairaçá",
        estado: "PR"
    }
}

console.log(aluno["notas dos alunos"])

// Outra forma e quando pegamos uma propriedade do objeto e atribuimos a uma variável

let propriedade = "nome"
console.log(aluno[propriedade]) //console.log verifica o objeto aluno e busca a string informada 
                                // e se existir traz o dado armazenado da string que cita uma propriedade

//OBS: o [] é obrigatorio o uso de " " para acessar a propriedade do objeto, mesmo que ela não tenha caracter especial ou espaço, 
// pois o valor dentro do [] é tratado como string.

console.log(aluno["idade"])
aluno["idade"] = 18
console.log(aluno["idade"])

//Object.assign({}) serve para criar um novo objeto a partir de um objeto existente, 
// copiando suas propriedades e valores para o novo objeto.

let aluno2 = Object.assign({}, aluno) //cria um novo objeto vazio e copia as propriedades do objeto aluno para ele
console.log(aluno2)

// Ou adicionar uma nova propriedade ao objeto aluno2

aluno2.matricula = "12345"
console.log(aluno2)

Object.assign(aluno2, {
    email: "lucasrodrigues1234@gmail.com"
})