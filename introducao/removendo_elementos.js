const notas = [10, 6.5, 5, 8, 7.5, 10];
notas.pop();//remove o ultimo elemento da lista
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/ notas.length;
console.log(`A média é: ${media}`);