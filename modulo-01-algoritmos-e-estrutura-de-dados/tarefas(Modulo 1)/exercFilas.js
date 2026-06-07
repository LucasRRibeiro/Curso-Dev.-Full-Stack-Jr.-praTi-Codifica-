/*
1. Desenhando um sistema de impressão (Fila de Impressão)
Instruções:
● Criar uma fila que simula o processo de uma fila de impressão;
● Adicionar tarefas de impressão (como "Imprimir Documento 1", "Imprimir Documento 2", etc.) na fila e, em seguida, desenfileirar as tarefas uma a uma, simulando a impressão;
● Imprimir no console o nome do documento sendo impresso a cada vez que uma tarefa for desenfileirar;
● Ao final, se a fila estiver vazia, imprimir uma mensagem indicando que não há mais tarefas na fila.

*/

class Fila{

    constructor(){
        this.itens = []
    }

    enfileirar(elemento){
        this.itens.push(elemento)
    }

    desenfileirar(){
        if(this.vazio()){
            return null
        }
        return this.itens.shift()
    }

    vazio(){
        return this.itens.length === 0
    }
    
    imprimirFila(){
        console.log(this.itens.join(' <- '))
    }
}

const fila = new Fila()

fila.enfileirar("Documento 1")
fila.enfileirar("Documento 2")
fila.enfileirar("Documento 3")
console.log("Fila de impressão:")
fila.imprimirFila()
while(!fila.vazio()){
    console.log(`\nDocumento sendo impresso: ${fila.desenfileirar()}`)
}

if(fila.vazio()){
    console.log('\nNão há mais documentos para impressão.')
}

fila.imprimirFila()
    