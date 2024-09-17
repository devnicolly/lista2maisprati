// Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

const pedidos = [
	{cliente: "Amelie", produto: "Calça" , quantidade: 3},
	{cliente: "Bia", produto: "Brinco", quantidade: 4},
	{cliente: "Gabriela" , produto: "Casaco", quantidade: 1},
	{cliente: "Amelie", produto: "Camiseta" , quantidade: 2},
]

let quantidadeCliente = {}

pedidos.forEach(pedido =>{
	if (!quantidadeCliente[pedido.cliente]){
		quantidadeCliente[pedido.cliente] = 0
	}
		
	quantidadeCliente[pedido.cliente] += pedido.quantidade
})

console.log(quantidadeCliente)