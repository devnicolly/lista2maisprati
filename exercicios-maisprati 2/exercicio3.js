// Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.

const produto = {
	preco: 200,
	quantidade: 2,
	centimetros: 30,
	peso: 2
}

function filtro (objeto, valor){
	const novoObjeto = { }

	for (let propiedade in objeto){

		if (objeto[propiedade] > valor){
			novoObjeto[propiedade] = objeto[propiedade]
		}
	}

	return novoObjeto
}

const filtragem = filtro (produto, 5)
console.log(filtragem)