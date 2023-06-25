
//Escopo externo 
let pokemon = "Charmander"

function evoluir(){
    //Escopo interno
    pokemon = "Charmeleon"
}
console.log(pokemon) //Chamando o escopo externo
evoluir() //Passando a função
console.log(pokemon) //Chamando o escopo externo atualizado

