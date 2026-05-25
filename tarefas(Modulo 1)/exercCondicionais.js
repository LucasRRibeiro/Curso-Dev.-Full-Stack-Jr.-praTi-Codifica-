/*Crie um programa com a idade do aluno e se ele possui autorização (responda com
sim ou não).
O sistema deve msotrar:
- Acesso permitido, se o aluno tiver 14 anos ou mais e autorização = sim
- Acesso permitido com responsavel, se o aluno tiver 12 ou 13 anos e autorização = sim
- Acesso negado, se o aluno tiver menos de 12 anos ou se não tiver autorização
*/

let idade = 18
let autorizacao = "sim"

if(idade >= 14 && autorizacao == "sim"){
    console.log("Acesso permitido")
}
else if((idade >= 12 && idade <= 13) && autorizacao == "sim"){
//Outra opção: ((idade == 12 || idade == 13) && autorizacao == "sim")
    console.log("Acesso permitido com responsável")
}
else if(idade < 12 || autorizacao != "sim"){
    console.log("Acesso negado")
}