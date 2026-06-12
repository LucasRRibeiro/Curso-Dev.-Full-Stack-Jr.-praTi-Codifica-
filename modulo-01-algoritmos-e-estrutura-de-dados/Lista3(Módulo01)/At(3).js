/*
3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
    experiência. Use for...in para listar todos os dados. Com base nos anos de
    experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
    anos = 10%, acima de 5 anos = 15%.
*/

let bonus

let funcionario = {
    nome: "Ana Silva",
    cargo: "Desenvolvedora",
    salario: 5000,
    anosExperiencia: 4
}

console.log("Dados do Funcionário:\n")
for (let atributo in funcionario) {
    console.log(`${atributo}: ${funcionario[atributo]}\n`)
}

if (funcionario.anosExperiencia <= 2) {
    bonus = funcionario.salario * 0.05;
} else if (funcionario.anosExperiencia >= 3 && funcionario.anosExperiencia <= 5) {
    bonus = funcionario.salario * 0.10;
} else {
    bonus = funcionario.salario * 0.15;
}

console.log(`Bônus Anual: R$ ${bonus.toFixed(2)}`);