//Objetivo: Crie um objeto livro com propriedades titulo, autor,anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.


const livro = {
	titulo: "Duna",
	autor: "Frank Herbert",
	anoPublicacao: 1965,
	genero: "Ficção"
}

if (!("editora" in livro)){
	livro.editora = "Editora Aleph"
}

for (let propiedade in livro){
	console.log(`${propiedade}: ${livro[propiedade]}`)
}
