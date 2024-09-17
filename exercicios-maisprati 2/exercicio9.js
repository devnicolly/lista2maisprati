// Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

const clientes = [
	{nome: "Mary", idade: 23, cidade: "New York"},
	{nome: "Juliana", idade: 31, cidade: "Fortaleza" },
	{nome: "Eduarda", idade: 34, cidade: "Rio de Janeiro"}
]

let  maior30 = 0

clientes.forEach(cliente =>{
	if(cliente.idade > 30){
		maior30++
	}
})

console.log(`Temos o total de ${maior30} clientes acima dos 30 anos`)