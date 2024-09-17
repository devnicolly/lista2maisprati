// Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

const carro = {
	marca: "fiat",
	modelo: "fiat 500",
	ano: 2012,
	cor: "bege"
}

for(let caracteristica in carro){
	console.log(`${caracteristica}: ${carro[caracteristica]}`)
}