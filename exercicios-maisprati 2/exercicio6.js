// Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

const funcionarios = [
	{nome: "José", cargo: "Estagiário" , salario: 1200 },
	{nome: "Talita", cargo:"Gerente" , salario: 8000},
	{nome: "Gabriela", cargo: "CEO" , salario: 15000 }
]

let salarioMinimo = 5000

for (let funcionario of funcionarios){
	if (funcionario.salario > salarioMinimo){
		console.log(`nome: ${funcionario.nome} -- cargo: ${funcionario.cargo} -- salário: ${funcionario.salario}`)
	}
}