// Crie um array de objetos filmes, onde cada filme tem titulo,diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

const filmes = [ 
	{titulo:"Little Women", diretor: "Greta Gerwig", anoLancamento: 2019},
	{titulo: "Almost Famous", diretor: "Cameron Crowe", anoLancamento: 2000},
	{titulo: "Amélie", diretor: "Jean-Pierre Jeunet", anoLancamento: 2001 }
]

const titulos = []

filmes.forEach (filme => {
	titulos.push(filme.titulo)
})

console.log(titulos)