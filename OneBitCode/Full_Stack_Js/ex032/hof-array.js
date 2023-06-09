const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

//Método Map: Transformação de arrays, ou seja, utiliza um array já existente para a criação de outro array. Não altera o array original
//Simulando o Map de maneira manual
/*
const nomes = []
for (let i = 0; i < personagens.length; i++){
    nomes.push(personagens[i].nome)
}
console.log(nomes)
*/
//Utilizando o método Map
const nomes = personagens.map(function (personagem) {
    return personagem.nome
}
)
console.log(nomes)



//Método Filter: Filtra elementos específicos de um array para criar um novo array. Não altera o array original
//Simulando o Filter de maneira manual.
/*
const orcs = []
for (let i = 0; i < personagens.length; i++){
    if (personagens[i].raca === "Orc"){
        orcs.push(personagens[i])
    }
}
console.log(orcs)
*/
//Utilizando o método Filter
const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"
})
console.log(orcs)



//Método Reduce: Transforma o array em algum outro elemento, como: objeto, número, string... Não altera o array original
//Utilizando o método reduce
const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel //Somando todos os níveis dos personagens
}, 0)
console.log(nivelTotal)


const racas = personagens.reduce(function(valorAcumulado, personagem){
    if (valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
}, {})
console.log(racas)



//Método Sort: Ordenar arrays, mudando as posições  de acordo com critérios
//Utilizando o método sort
personagens.sort(function(a, b){ //Altera o array original
    return a.nivel - b.nivel //Orden crescente
}) 
console.log(personagens)

//Para evitar essa alteração, é possível adicionar um slice para criar uma cópia do array e o sort irá ordernar a cópia.
const personagensOrdenados = personagens.slice().sort(function (a, b){
    return b.nivel - a.nivel //Orden decrescente
})
console.log(personagensOrdenados)