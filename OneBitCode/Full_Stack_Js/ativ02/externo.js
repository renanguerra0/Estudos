
const pessoaMaior = prompt("Insira o nome da pessoa mais velha: ")
const idadeMaior = prompt("Insira a idade da pessoa mais velha: ")
const pessoaMenor = prompt("Insira o nome da pessoa mais nova: ")
const idadeMenor = prompt("Insira a idade da pessoa mais nova: ")

let subtracao = idadeMaior - idadeMenor

alert("Pessoa mais velha: \n" + "Nome: " + pessoaMaior + "\nIdade: " + idadeMaior)
alert("Pessoa mais nova: \n" + "Nome: " + pessoaMenor + "\nIdade: " + idadeMenor)
alert("Possuem uma diferença de idade de: " + subtracao + " anos")