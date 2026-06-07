/*
2. Implementação de deque
Instruções:
● Implementar uma classe Deque que permita adicionar e remover elementos tanto na frente quanto no final da estrutura;
● A classe deve ter os métodos: addFront(element), addBack(element), removeFront(), removeBack(), peekFront(), peekBack(), isEmpty() e size();
● Criar um objeto da classe Deque e adicionar elementos em ambas as extremidades.

Após isso, remover elementos de ambas as extremidades e mostrar o estado da
estrutura após cada operação.
*/

class Deque{
    constructor(){
        this.itens = []
    }

    addFront(elemento){
        this.itens.unshift(elemento)
    }

    addBack(elemento){
        this.itens.push(elemento)
    }

    removeFront(){
        if(this.isEmpty()){
            console.log("O deque está vazio!")
            return null
        }
        return this.itens.shift()
    }

    removeBack(){
        if(this.isEmpty()){
            console.log("O deque está vazio!")
            return null
        }
        return this.itens.pop()
    }

    peekFront(){
        if(this.isEmpty()){
            console.log("O deque está vazio!")
            return null
        }
        return this.itens[0]
    }

    peekBack(){
        if(this.isEmpty()){
            console.log("O deque está vazio!")
            return null
        }
        return this.itens[this.itens.length - 1]
    }

    isEmpty(){
        return this.itens.length === 0
    }

    size(){
        return this.itens.length
    }

    print(){
        console.log(this.itens.join(' -> '))
    }
}

const deque = new Deque()

deque.addFront("A")
deque.addBack("B")
deque.addFront("C")
deque.addBack("D")
console.log("\nDeque após adições:\n")
deque.print()

deque.removeFront()
console.log("\nDeque após remover da frente:\n")
deque.print()

deque.removeBack()
console.log("\nDeque após remover do final:\n")
deque.print()

console.log("\nElemento na frente:", deque.peekFront())
console.log("\nElemento no final:", deque.peekBack())