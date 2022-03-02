//somando e fazendo media com reduce 


const salaJS = [10, 9, 7];
const salaJava = [5, 10, 6];
const salaPython = [6, 4, 8];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notasDaSala.length;
}

console.log(` A média da sala de JS é: ${mediaSala(salaJS)}`);
console.log(` A média da sala de Java é: ${mediaSala(salaJava)}`);
console.log(` A média da sala de Python é: ${mediaSala(salaPython)}`);

//-----------

const notas =  [10, 8, 6, 5, 4, 7, 2, 8, 5, 3];

const media = notas.reduce((acum, atual) => atual + acum,0) / notas.length;
