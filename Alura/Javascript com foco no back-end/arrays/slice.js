const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

//Dividindo 1 array em 2 arrays
//Não altera o array original
// const sala1 = alunos.slice(0,10);
// const sala2 = alunos.slice(10);

//Fazendo de maneira dinâmica
const sala1 = alunos.slice(0,alunos.length/2);
const sala2 = alunos.slice(alunos.length/2);


console.log(sala1);
console.log(sala2);