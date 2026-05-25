/*
17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
    idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
    nome e idade.
*/

let pessoa = {
    nome:"Lucas",
    idade: 18
}

console.log(`Idade do ${pessoa.nome} é ${pessoa.idade}`)

pessoa.email = "lucasrodrigues1234@gmail.com"

console.log(`\nO email do ${pessoa.nome} é ${pessoa.email}`)