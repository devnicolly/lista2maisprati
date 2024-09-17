// Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

const produtos = [
	{nome: "Notebook", preco: 3500, desconto: 0.10},
	{nome: "Iphone", preco: 5000, desconto: 0.10},
	{nome: "Tablet", preco: 2000, desconto: 0.10},
	{nome: "Geladeira", preco: 7000, desconto: 0.10}
]

produtos.forEach(produto => {
	const precoNovo = produto.preco - (produto.preco * produto.desconto)

	console.log (`O produto: ${produto.nome}, com desconto de 10% = R$ ${precoNovo.toFixed(2)} Aproveite!!!`)
})