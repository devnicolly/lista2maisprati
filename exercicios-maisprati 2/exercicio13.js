// Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

const carrinho = {
	itens : [
		{nome: "Tinta", quantidade: 2 , precoUnitario: 25 },
		{nome: "Creme de Pentear" , quantidade: 2, precoUnitario: 35},
		{nome: "Descolorante", quantidade: 1, precoUnitario: 15 }
	]
} 

let valorTotal = 0

carrinho.itens.forEach(item =>{
	valorTotal += item.quantidade * item.precoUnitario
})

console.log(`O seu carrinho tem o total de R$ ${valorTotal}`)