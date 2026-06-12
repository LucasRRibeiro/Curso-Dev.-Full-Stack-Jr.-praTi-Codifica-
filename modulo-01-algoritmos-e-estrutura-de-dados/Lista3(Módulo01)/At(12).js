/*
12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
    funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
    Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
    exiba a lista antes e depois.
*/

class No {

    constructor(valor) {
        this.valor = valor
        this.proximo = null
    }
}

class ListaLigada {
    constructor() {
        this.cabeca = null
    }

    adicionar(tarefa) {
        const novoNo = new No(tarefa)
        if (!this.cabeca) {
            this.cabeca = novoNo
        } else {
            let atual = this.cabeca
            while (atual.proximo) {
                atual = atual.proximo
            }
            atual.proximo = novoNo
        }
    }

    remover(tarefa) {
        if (!this.cabeca) {
            console.log("A lista está vazia.")
            return
        }

        if (this.cabeca.valor === tarefa) {
            this.cabeca = this.cabeca.proximo
            return
        }

        let atual = this.cabeca
        while (atual.proximo && atual.proximo.valor !== tarefa) {
            atual = atual.proximo
        }

        if (atual.proximo) {
            atual.proximo = atual.proximo.proximo
        } else {
            console.log("Tarefa não encontrada.")
        }
    }

    exibir() {
        if (!this.cabeca) {
            console.log("A lista está vazia.")
            return
        }

        let atual = this.cabeca
        console.log("Tarefas:")
        while (atual) {
            console.log(`- ${atual.valor}`)
            atual = atual.proximo
        }
    }
}

let listaTarefas = new ListaLigada()

listaTarefas.adicionar("Comprar leite")
listaTarefas.adicionar("Lavar o carro")
listaTarefas.adicionar("Estudar para a prova")
listaTarefas.adicionar("Fazer exercícios")

console.log("Lista de tarefas antes da remoção:")
listaTarefas.exibir()

listaTarefas.remover("Lavar o carro")

console.log("\nLista de tarefas depois da remoção:")
listaTarefas.exibir()
