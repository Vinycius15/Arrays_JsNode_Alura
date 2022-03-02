// o método de callback map() ele diferente do ForEach nos retorna sempre algo.

//para o foreach retornar algo é necessário criar os códigos necessários, dependendo a ocasião.

const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(notas => notas==10 ? notas : ++notas);

console.log(notas);
console.log(notasAtualizadas);