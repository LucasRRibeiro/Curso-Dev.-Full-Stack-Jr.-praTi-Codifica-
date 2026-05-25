//for(inicialização; condição; incremento/decremento)

for(let i = 0; i <= 4; i++){
    console.log(i)
}

//while(condição){conteudo - incremento}
let i = 0
while(i < 5){
    console.log(i)
    i++
}

//exemplo de senha

/*let senhaCorreta = "123abc"
let senha = "abc123" // ideal seria o input aqui e dentro do while até o usuário informar a senha correta

while(senha != senhaCorreta){
    console.log("Senha Incorreta!")
}
*/

/*
    do{
        ação a ser executada
    }
    while(condição)
*/
i = 0
do{
    console.log(i)
    i++
}
while(i < 5)