// Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

const empresa = {
	departamentos: [ 
		{

	 nome: "RH",

	 funcionarios : [
		{nome: "Ana", cargo: "Entrevistadora"},
		{nome: "Thiago", cargo: "Analista"}
	 ]
	},

	{ nome: "TI",
		funcionarios: [
			{nome: "Carlos", cargo: "Analista de sistemas"},
			{nome: "Carla", cargo: "Desenvolvedora"}
		]
	},
		
	]
}


for (const departamentoKey in empresa.departamentos){
	const departamento = empresa.departamentos[departamentoKey]

	for (const funcionario of departamento.funcionarios){
	console.log(`Funcionário: ${funcionario.nome} -- Departamento: ${departamento.nome}`)
	}
}

