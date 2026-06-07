class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.rear) {
            this.rear.next = newNode;
        } else {
            this.front = newNode;
        }
        this.rear = newNode;
        this.size++;
    }
}

let fila = new Queue();
fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);