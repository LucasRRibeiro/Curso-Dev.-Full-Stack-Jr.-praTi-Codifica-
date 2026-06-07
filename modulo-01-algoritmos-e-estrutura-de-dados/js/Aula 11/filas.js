class Fila{

    constructor(){
        this.itens = [] // Não existe fila nativa, por isso usamos array/ this(vai relacionar a criação do array(fila) pertence a classe Filas)
    }   

    enfileirar(elemento){
        this.itens.push(elemento) // Adiciona um elemento ao final da fila
    }

    imprimirFila(){
        console.log(this.itens.join(' <- ')) // Exibe os itens da fila // O join é usado para formatar a saída, mostrando os elementos separados por uma seta
    }

    desenfileirar(){
        if(this.vazio()){
            console.log("A fila está vazia!")
            return null
        }

        return this.itens.shift() // Remove e retorna o primeiro elemento da fila
    }

    vazio(){
        return this.itens.length === 0 // Verifica se a fila está vazia, retornando true se estiver e false caso contrário
    }

    proximo(){
        if(this.vazio()){
            console.log("A fila está vazia!")
            return null
        }
        
        return this.itens[0] // Retorna o primeiro elemento da fila sem removê-lo
    }
}

const fila = new Fila() // Criando uma nova fila usando a classe Fila (Através do constructor, a fila é inicializada com um array vazio)

fila.enfileirar("A") // Adiciona o elemento "A" à fila
fila.enfileirar("B") // Adiciona o elemento "B" à fila
fila.enfileirar("C") // Adiciona o elemento "C" à fila

fila.imprimirFila() // Exibe os itens da fila, mostrando "A <- B <- C"
console.log(`Elemento removido: ${fila.desenfileirar()}`) // Remove o primeiro elemento da fila (deve remover "A")
fila.imprimirFila() // Exibe os itens da fila, mostrando "B <- C"
console.log(`Elemento removido: ${fila.desenfileirar()}`) // Remove o primeiro elemento da fila (deve remover "B")
fila.imprimirFila() // Exibe os itens da fila, mostrando "C"
console.log(`Elemento removido: ${fila.desenfileirar()}`) // Remove o primeiro elemento da fila (deve remover "C")
fila.imprimirFila() // Exibe os itens da fila, mostrando que está vazia
console.log(`Elemento removido: ${fila.desenfileirar()}`) // Tenta remover um elemento de uma fila vazia (deve exibir mensagem de erro)