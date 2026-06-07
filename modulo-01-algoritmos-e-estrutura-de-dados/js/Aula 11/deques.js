class Deque{
    constructor(){
        this.itens = [] // Não existe deque nativo, por isso usamos array/ this(vai relacionar a criação do array(deque) pertence a classe Deque)  
    }

    adicionarFrente(elemento){
        this.itens.unshift(elemento) // Adiciona um elemento no início do deque
    }

    adicionarFim(elemento){
        this.itens.push(elemento) // Adiciona um elemento no final do deque
    }

    removeFrente(){
        return this.itens.shift() // Remove e retorna o elemento do início do deque
    }

    removeFim(){
        return this.itens.pop() // Remove e retorna o elemento do final do deque
    }
}

const deque = new Deque()