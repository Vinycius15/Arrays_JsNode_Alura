const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediaDosAlunos = [10, 7, 9, 6];

//indexOf ->3
//.includes() -> booleano
let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

//arrow function 2 funções
const exibeNomeNotas = (nomeAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeAluno)){
                                //[0]  //[3]         
        indice = listaDeNotasEAlunos[0].indexOf
        (nomeAluno)
                                 //[0] //[3]
        return listaDeNotasEAlunos[0][indice] + ', Sua média é: ' + mediaDosAlunos[1][indice]
    }else{
        return "Aluno não cadastrado"
    }
}

console.log(exibeNomeNotas("Ana"));
