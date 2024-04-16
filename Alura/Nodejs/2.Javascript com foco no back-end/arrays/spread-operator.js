//Spread operator (operador de espalhamento)

const notas = [7,7,8,9];

//Ao realizar a atribuição direta o JS entende que os dois arrays são os mesmos. 
//const novasNotas = notas;

//Para corrigir esse problema, iremos utilizar o spread operator [...]
const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As notas antigas são: ${notas}`);
console.log(`A novas notas são os ${novasNotas}`);