// Estrutura de Dados: Pilhas (Stack) e Árvores

// É fundamental para entender o funcionamento da lógica de programação
// Essa ideia da pilha é vasta e importante, pois entender coisas básicas dos navegadores 
// Funcionamento interno das linguagens de programação, como o JavaScript, é essencial para
// se tornar um programador mais eficiente e capaz de resolver problemas complexos.

// Pilha(Não é nativo): Estrutura de dados linear. Ex: pratos empilhados, onde o último prato colocado 
// é o primeiro a ser retirado (LIFO - Last In, First Out).
// Ultimo dado que entrou é o primeiro a sair. Ex: voltar, control-z, desfazer ações, etc.

const pilha = [] // Criando uma pilha vazia (array - forma de representar pilha)

pilha.push("Livro 1") // 0 (Adicionando elementos à pilha)
pilha.push("Livro 2") // 1
pilha.push("Livro 3") // 2

console.log(pilha) // Exibindo a pilha atual
console.log("Topo: ", pilha[pilha.length - 1]) // Exibindo o topo da pilha (pilha.length mostra o tamanho da pilha que seria 3,
                                                //  -1 para acessar o último elemento)
console.log("Removido: ", pilha.pop()) // Removendo o topo da pilha (Livro 3)
console.log("Agora o topo é: ", pilha[pilha.length - 1]) // Exibindo o novo topo da pilha (Livro 2)

// Classe/Pilha

// JS não possui classes para ser estruturado, mas temos classes internas para funcionar como protótipos
// Mas podemos criar uma estrutura de classes para trabalhar com seus metodos e atributos e com isso 
// para ver essa criação dessa classe e como utilizar ela para criar pilhas e trabalhar na estrutura
// de dados dessas pilhas.

class Pilha{ // molde de um objeto que vai ter todos os metodos e atributos para poder replicar para outros objetos
    constructor(){ // método especial dentro de uma classe, chama ele automaticamente sempre que 
                  // cria uma nova instancia da classe (inicializa os atributos dessa nossa classe/objeto)

        this.itens = [] // Não existe pilha nativa, por isso usamos array/ this(vai relacionar a criação do array(pilha) pertence a classe Pilha)
    }

    // Funções e métodos para manipular a pilha quando o objeto for criado/invocado

        push(elemento){
            this.itens.push(elemento) // Adiciona um elemento ao topo da pilha
    }

        pop(){
            if(this.isEmpty()){ // Verifica se a pilha está vazia antes de tentar remover um elemento
                console.log("Pilha vazia! Não é possível remover elementos.")
                return null // Retorna null ou pode lançar um erro, dependendo da sua preferência
            }
                return this.itens.pop() // Remove o elemento do topo da pilha
        }

        isEmpty(){
            return this.itens.length === 0 // Verifica se a pilha está vazia (retorna true ou false)
        }

        print(){ // Método para exibir os elementos da pilha
            console.log(this.itens) // Exibe os itens da pilha
    }
    
} // Só podemos manipular a pilha usando os métodos definidos na classe, garantindo que a 
  // estrutura de dados seja mantida corretamente.

const pilhaa = new Pilha() // Criando uma nova pilha usando a classe Pilha (Através do constructor, a pilha é inicializada
                          //  com um array vazio)

pilhaa.print() // Exibindo a pilha (deve estar vazia)

pilhaa.push("A") // Adicionando elementos à pilha]

pilhaa.print() // Exibindo a pilha (deve conter "A")

pilhaa.push("B")

console.log("Topo: ", pilhaa.itens[pilhaa.itens.length - 1]) // Exibindo o topo da pilha (deve conter "B")

pilhaa.pop() // Removendo o topo da pilha (deve remover "B")

pilhaa.print() // Exibindo a pilha (deve conter apenas "A")

pilhaa.pop() // Removendo o topo da pilha (deve remover "A")

pilhaa.print() // Exibindo a pilha (deve estar vazia)

pilhaa.pop() // Tentando remover de uma pilha vazia (deve exibir mensagem de erro)

pilhaa.print() // Exibindo a pilha (deve estar vazia)



