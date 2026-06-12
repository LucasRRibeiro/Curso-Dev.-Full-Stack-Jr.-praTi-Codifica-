/*
2. Crie dois objetos representando personagens de um jogo, cada um com as
    propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
    cada personagem lado a lado e determine qual deles tem maior poder total
    (soma de vida + ataque + defesa).
*/

function calcularPoderTotal(personagem) {
    return personagem.vida + personagem.ataque + personagem.defesa
}

let p1 = {
    nome: "Guerreiro",
    vida: 100,
    ataque: 20,
    defesa: 10
}

let p2 = {
    nome: "Mago",
    vida: 95,
    ataque: 30,
    defesa: 5
}

console.log(`Personagem: ${p1.nome}`)
for (let atributo in p1) {
    if (atributo !== "nome") {
        console.log(`${atributo}: ${p1[atributo]}`)
    }
}

console.log(`\nPersonagem: ${p2.nome}`)
for (let atributo in p2) {
    if (atributo !== "nome") {
        console.log(`${atributo}: ${p2[atributo]}`)
    }
}

let poderP1 = calcularPoderTotal(p1)
let poderP2 = calcularPoderTotal(p2)

if (poderP1 > poderP2) {
    console.log(`\n${p1.nome} tem maior poder total: ${poderP1}`)
}
else if (poderP2 > poderP1) {
    console.log(`\n${p2.nome} tem maior poder total: ${poderP2}`)
}   
else {
    console.log(`\n${p1.nome} e ${p2.nome} têm o mesmo poder total: ${poderP1}`)
}
