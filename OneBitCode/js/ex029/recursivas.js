
function dividir(num){
    console.log(num)
    if (num % 2 == 0) { //Identifica se o número é par
        dividir(num / 2) //Sendo par, é realizada a divisão por 2
    } else {
        return num //O processo anterior é repetido até o número deixar de ser par. 
    }
}

dividir(2)



//Função para calcular o fatorial de um número.
function fatorial(numero){
    console.log("Número: " + numero)

    if (numero == 0){
        return 1
    } else if (numero == 1){
        return 1
    } else {
        console.log(numero + " * !" + (numero - 1))
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(5))