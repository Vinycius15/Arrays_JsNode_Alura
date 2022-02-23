const notas = [10, 6.5, 5, 8, 7.5];
notas.push(10);
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5])/ notas.length;

console.log((media));
console.log(Math.round(media));
