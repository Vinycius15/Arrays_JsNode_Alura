//resultados de arrays vazias

const arrayVazia = [];

console.log(arrayVazia) //[]
console.log(arrayVazia.length)//0

const arrayVazia = [];
console.log(arrayVazia[0]) //undefine

//----------------------

const arrayVazia = [,,,];
console.log(arrayVazia.length) //3
console.log(arrayVazia[0])  //undefine
console.log(arrayVazia[1])  //undefine
console.log(arrayVazia[2])  //undefine

//----------------------------

const arrayVazia = [,,,];
console.log(arrayVazia.length)  //3
arrayVazia.push(50)
console.log(arrayVazia)  //[ <3 empty items>, 50 ]
console.log(arrayVazia.length)//4