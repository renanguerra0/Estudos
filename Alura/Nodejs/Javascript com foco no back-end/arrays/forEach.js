
const notas = [10, 6.5, 8, 7.5];

let somarNota = 0;

//forEach também é uma estrutura de repetição
notas.forEach(function(valores){ //A função anônima está sendo passada com parâmetro da função forEach, sendo assim uma callback
    somarNota += valores;
});

const media = somarNota / notas.length;

console.log(`A média é: ${media}`)