/*
11. Implemente uma fila usando um array para simular o atendimento de uma
    clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
    (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
    exibindo o estado da fila a cada operação.
*/

class Fila {
    constructor() {
        this.itens = []
    }

    chegarPaciente(nome) {
        this.itens.push(nome)
    }

    chamarProximo() {
        if (this.itens.length > 0) {
            return this.itens.shift()
        } else {
            console.log("Não há pacientes na fila.")
            return null
        }
    }

    exibirFila() {
        console.log("\nFila de pacientes:")
        for (let i = 0; i < this.itens.length; i++) {
            console.log(`${i + 1}. ${this.itens[i]}`)
        }
    }
}

let filaClinica = new Fila()

filaClinica.chegarPaciente("João")
filaClinica.chegarPaciente("Maria")
filaClinica.chegarPaciente("Pedro")
filaClinica.chegarPaciente("Ana")
filaClinica.chegarPaciente("Lucas")
filaClinica.exibirFila()
filaClinica.chamarProximo()
filaClinica.exibirFila()
filaClinica.chamarProximo()
filaClinica.exibirFila()
filaClinica.chamarProximo()
filaClinica.exibirFila()