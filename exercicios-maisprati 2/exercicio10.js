// Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

const vendas = [
	{produto: "Sapatos", quantidade: 30, valor: 40},
	{produto: "Camisas", quantidade: 40, valor: 30},
	{produto: "Calças", quantidade: 20, valor: 80}
]

let valorTotal = 0

vendas.forEach(venda =>{
	valorTotal += venda.quantidade * venda.valor
})

console.log(`Total de vendas: R$ ${valorTotal.toFixed(2)}`)