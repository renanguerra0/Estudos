// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura, peso){
    return peso/(altura * altura);
};
console.log(`Seu índice corporal é de: ${calcularIMC(1.66, 80)}`)


// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero){

    let numeroFixo = numero;
    let decrementarNumero = numero;

    for (let contador = 1; contador < numeroFixo; contador++) {
        decrementarNumero--;
        numero = numero * decrementarNumero;
    };

    return numero;
};
console.log(calcularFatorial(5));


// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function conversaoReal(valorDolar){
    return valorConvertido = valorDolar * 4.80
};
console.log(conversaoReal(2));


// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularRetangulo(a, l){
    let area = a * l;
    let perimetro =  2 * (a * l);

    return console.log(`Area retângulo: ${area}\nPerímetro retângulo: ${perimetro}`);
};
calcularRetangulo(2,4)


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularCirculo(r){
    let area = 3.14 * r**2; //Math.pow(r,2)
    let perimetro =  2 * 3.14 * r;

    return console.log(`Área cirular: ${area}\nPerímetro cirular: ${perimetro}`);
};
calcularCirculo(2)

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero){
    
    let cont = 1
    while (cont <= 10){
        resultado = numero * cont;
        console.log(`${numero} X ${cont} = ${numero * cont}`)
        cont++;
    };
};
tabuada(4);