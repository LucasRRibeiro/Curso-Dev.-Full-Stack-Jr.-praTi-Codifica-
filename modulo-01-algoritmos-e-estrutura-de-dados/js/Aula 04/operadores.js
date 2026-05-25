//Operadores Aritméticos 
/*
    Soma +
    Subtração - 
    Multiplicação *
    Divisão /
    Resto %
    Potência **
*/

console.log(10 + 23)
console.log(245 - 90)
console.log(2 * 22)
console.log(400 / 4)
console.log(4 % 2)
console.log(2 ** 4, "\n")

//Operadores de atribuição
// = 

let numero = 5
console.log(numero)
//numero = numero + 30 //auto-atribuição
numero += 30
console.log(numero)

//Operadores Incremento
//let numero (declaração) 
//numero = numero + 1
numero++ //Outra opção:(--)
console.log(numero, "\n")

//Operadores Relacionais
/*
    >
    <
    >=
    <=
    == (Se são iguais)
    === (tipo)
    !=
*/

console.log(numero > 5)
console.log(numero < 5)
console.log(numero != 10)
console.log(numero == 10)
console.log(numero == "36") //Compara os valores(Se são idênticos)
console.log(numero === "36") //Compara o tipo e o valor(number == string - FALSE)
console.log(numero != "36") //Compara os valores(Se são diferentes)
console.log(numero !== "36", "\n") //Compara o tipo e o valor(number != string - TRUE)

//Operadores Lógicos
/*
    && - e - and 
    || - ou - or
*/

console.log(numero > 10 && numero < 15)
console.log(numero > 10 || numero < 15, "\n")

//Operadores Ternarios
//teste ? true : false 

let media = 6
console.log(media > 6?"Aprovado":"Reprovado") //Respostas rápidas para se for TRUE ou FALSE (if simplificado/compacto, para informar uma resposta melhor ao usuário)
