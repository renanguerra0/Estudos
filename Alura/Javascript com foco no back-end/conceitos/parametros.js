//Parâmetros de função
function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(5,6));
console.log(soma(100,65));


function multiplicacao(n1 = 1, n2 = 1){
    return n1 * n2;    
}


let x = multiplicacao(soma(2,3),soma(4,1));

let y = multiplicacao(soma(2,3)); //Como não foi definido um parâmetro, então o 1, conforme definido na função foi passado. 

console.log(x);
console.log(y);

