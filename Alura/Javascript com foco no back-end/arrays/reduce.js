const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
        // return acumulador + 1; //O acumulador por padrão inicia em 0, ele faz uma contagem para cada iteração.
    }, 0);

    const media = somaDasNotas / notasDaSala.length;
    return media;
}

console.log(`A média da sala de JavaScript é: ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é: ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Pythont é: ${calculaMedia(salaPython)}`);