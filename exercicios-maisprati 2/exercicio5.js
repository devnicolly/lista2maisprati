// Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

const alunos = [
	{nome: "Maria", nota1: 4, nota2: 7},
	{nome: "João", nota1: 8, nota2: 9},
	{nome: "Nicolly", nota1: 10, nota2: 10}
]

for (let aluno of alunos){
	let media = (aluno.nota1 + aluno.nota2) / 2

	console.log(`nome: ${aluno.nome} -- média: ${media}`)
}