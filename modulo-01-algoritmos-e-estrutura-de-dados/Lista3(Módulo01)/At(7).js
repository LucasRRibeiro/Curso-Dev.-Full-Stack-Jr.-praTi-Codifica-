/*
7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
    cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
    forEach para calcular e exibir separadamente a média dos aprovados e a média
    dos reprovados.
*/
let mediaAprovados = 0
let mediaReprovados = 0
let aprovados = []
let reprovados = []

let alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 6 },
    { nome: "Ana", nota: 4 },
    { nome: "Lucas", nota: 9 },
    { nome: "Carla", nota: 3 }
]

for (let aluno of alunos) {
    if (aluno.nota >= 7) {
        console.log(`\n${aluno.nome} - Aprovado`)
        aprovados.push(aluno.nota)
    } else if (aluno.nota >= 5) {
        console.log(`\n${aluno.nome} - Recuperação`)
    } else {
        console.log(`\n${aluno.nome} - Reprovado`)
        reprovados.push(aluno.nota)
    }
}


aprovados.forEach(nota => {mediaAprovados += nota})

mediaAprovados = mediaAprovados / aprovados.length

reprovados.forEach(nota => {mediaReprovados += nota})

mediaReprovados = mediaReprovados / reprovados.length

console.log(`\nMédia dos aprovados: ${mediaAprovados}`)
console.log(`\nMédia dos reprovados: ${mediaReprovados}`)