/*
10. Implemente uma pilha usando um array para simular o histórico de um
    navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
    (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
    cada operação.
*/

class Pilha {
    constructor() {
        this.itens = []
    }

    visitar(pagina) {
        this.itens.push(pagina)
    }

    voltar() {
        if (this.itens.length > 0) {
            return this.itens.pop()
        } else {
            console.log("Não há páginas para voltar.")
            return null
        }
    }

    paginaAtual() {
        if (this.itens.length > 0) {
            return this.itens[this.itens.length - 1]
        } else {
            console.log("Não há páginas visitadas.")
            return null
        }
    }

}

let historico = new Pilha()

historico.visitar("www.google.com")
console.log(`\nPágina atual: ${historico.paginaAtual()}`)
historico.visitar("www.facebook.com")
console.log(`\nPágina atual: ${historico.paginaAtual()}`)
historico.visitar("www.youtube.com")
console.log(`\nPágina atual: ${historico.paginaAtual()}`)
historico.visitar("www.twitter.com")
console.log(`\nPágina atual: ${historico.paginaAtual()}`)

historico.voltar()
console.log(`\nPágina atual: ${historico.paginaAtual()}`)
historico.voltar()
console.log(`\nPágina atual: ${historico.paginaAtual()}`)

