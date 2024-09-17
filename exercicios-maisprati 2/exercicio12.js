// Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
	{produto: "Borracha", quantidade: 20 , minimo: 10 },
	{produto: "Caneta", quantidade: 5 , minimo: 20 },
	{produto: "Papel" , quantidade: 4 , minimo: 10}
]

estoque.forEach(item =>{
	if (item.quantidade < item.minimo){
		item.quantidade *= 2
	}
})

console.log(estoque)