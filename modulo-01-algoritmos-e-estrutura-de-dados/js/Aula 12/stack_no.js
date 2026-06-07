class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StyackLinked {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop(value) {
        if(!this.top) {
            return null;
        }
        let poppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }

    peek() {
        return this.top ? this.top.value : null;
    }
}

let pilha = new StyackLinked();
pilha.push(10);
pilha.push(20);
pilha.push(30);
console.log(pilha.pop()); // 30
console.log(pilha.pop()); // 20
console.log(pilha.peek()); // 10
console.log(pilha.pop()); // 10
console.log(pilha.pop()); // null
console.log(pilha.peek()); // null

class StackArray {
    constructor() {
        this.items = [];
    }
    
    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }
}

let pilhaArray = new StackArray();
pilhaArray.push(10);
pilhaArray.push(20);
pilhaArray.push(30);
console.log(pilhaArray.pop());