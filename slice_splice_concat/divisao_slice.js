const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Aluno da sala 1: ${sala1}`);
console.log(`Aluno da sala 2: ${sala2}`);