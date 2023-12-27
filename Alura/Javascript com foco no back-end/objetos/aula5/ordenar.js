const clientes = require("./clientes.json");

//Organizando em ordem crescente
function ordernar(lista, propriedade) {
    const resultado = lista.sort( (a,b) => {
        if(a[propriedade] < b[propriedade]){
            return -1;
        }
        if(a[propriedade] > b[propriedade]){
            return +1;
        }
        return 0;
    });
    return resultado;
};

const ordenadoNome = ordernar(clientes, "nome");
console.log(ordenadoNome);