/*
9. Crie um array de objetos onde cada objeto representa um contato com nome,
    telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
    buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
    uma mensagem de "não encontrado".
*/
function buscarContato(nome) {
    for (let contato of contatos) {
        if (contato.nome.toLowerCase() === nome.toLowerCase()) {
            return contato
        }
    }
    return null
}

let contatos = [
    { nome: "João", telefone: "123456789", email: "joao@email.com" },
    { nome: "Maria", telefone: "987654321", email: "maria@email.com" },
    { nome: "Pedro", telefone: "456789123", email: "pedro@email.com" }
];

contatos.forEach(contato => {console.log(`\nNome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`)})

let nomeBusca = "Maria"
let nomeBusca2 = "Ana"

let contatoEncontrado = buscarContato(nomeBusca)
if (contatoEncontrado) {
    console.log(`\nContato encontrado: Nome: ${contatoEncontrado.nome}, Telefone: ${contatoEncontrado.telefone}, Email: ${contatoEncontrado.email}`)
}
else {    
    console.log("\nContato não encontrado")
}

let contatoEncontrado2 = buscarContato(nomeBusca2)
if (contatoEncontrado2) {
    console.log(`\nContato encontrado: Nome: ${contatoEncontrado2.nome}, Telefone: ${contatoEncontrado2.telefone}, Email: ${contatoEncontrado2.email}`)
}
else {    
    console.log("\nContato não encontrado")
}