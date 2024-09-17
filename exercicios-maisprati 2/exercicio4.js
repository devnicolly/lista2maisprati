// Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

const pessoas = [
	{nome: "Sabrina Carpenter", idade: 25, cidade: "Quakertown"},
	{nome: "Taylor Swift", idade: 34, cidade: "West Reading"},
	{nome: "Grace Kelly", idade: 52, cidade: "Filadélfia"}
]

for (let pessoa of pessoas){
	console.log(`nome: ${pessoa.nome}, idade: ${pessoa.idade}, cidade: ${pessoa.cidade}`)
}