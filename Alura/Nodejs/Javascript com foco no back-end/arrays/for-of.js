
const notas = [10, 6.5, 8, 7.5];

let somarNotas = 0;

//Para cada elemento de notas, execute o código que está dentro das chaves {}.
for (let elemento of notas){
    somarNotas += elemento;
}

console.log("A média das notas é: " + somarNotas/notas.length);