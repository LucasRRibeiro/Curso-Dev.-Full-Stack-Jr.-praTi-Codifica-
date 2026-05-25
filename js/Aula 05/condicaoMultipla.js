let dia = new Date()
let diaSemana = dia.getDay()
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta 
    6 - Sabado
*/
console.log(diaSemana)

/*Switch e Case - serve para testar o valor da variável e retornar um bloco de instruções com base no
  valor que a variável se encontra, caso não entre em nenhum vai para o default
*/
switch(diaSemana){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sábado")
        break
    default:
        console.log("Valor inválido")
        break
}