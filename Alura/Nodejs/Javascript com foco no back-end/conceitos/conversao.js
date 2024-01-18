
//Conversão impícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); //Comparação de valores
console.log(numero === numeroString); //Comparação de valores e tipo 

console.log(numero + numeroString); //Contatenando

//Conversão explícita

console.log(numero + Number(numeroString)); //Number() converte para número

