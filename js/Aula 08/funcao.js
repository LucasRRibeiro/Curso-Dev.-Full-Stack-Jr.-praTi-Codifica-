// Função é um bloco de código que pode ser reutilizado. Ela pode receber parâmetros e retornar um valor.

function nomeDaFuncao(){
    //Bloco de código
}

//Função de mensagem
function mensagem(){
    console.log("Olá mundo")
}

mensagem()

//Função de soma
function soma(a, b){
    /*
    return - entrega resultado.
    Esse resultado por ser guardado em uma variável
    e mostrar ele no console ou enviara para outra 
    função.
    */
    return a + b
}

let resultado = soma(5, 6)

console.log(resultado)

//Função de média
function calcularMedia (nota1, nota2){
    let media = (nota1 + nota2) / 2

    return media
}

let mediaFinal = calcularMedia(8, 10)
console.log(`A média desse aluno é ${mediaFinal}`)

//Função de saudação
function saudacao(nome){
    console.log(`Olá, ${nome}`)
}

console.log("Inicio do programa") // Ao ler a linha executa o console.log
saudacao("Lucas") // Ao ler a linha ele busca a função passa o paramentro e executa o bloco de código
console.log("Fim do programa") // Ao ler a linha executa o console.log