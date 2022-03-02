const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const notas = [10, 4, 9, 6];

const reprovados = alunos.filter((nome, indice) => notas[indice]< 5 );

console.log(`reprovados: ${reprovados}`);