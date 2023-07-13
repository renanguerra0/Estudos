

const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//ADICIONANDO ELEMENTOS

//push: adicionar elemento no final do array
arr.push("Boromir")
console.log(arr)

//unshift: adicionar elemento no começo do array
arr.unshift("Boromir")
console.log(arr)



//REMOVENDO ELEMENTOS

//pop: remover elemento no final do array
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift: remover elemento no começo do array
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)



//PESQUISANDO ELEMENTOS

//includes: verificar se um elemento está presente no array (true ou false)
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexof: retorna qual o índice do elemento
const indice = arr.indexOf("Gandalf")
console.log(indice)



//CORTANDO E CONCATENANDO

//slice: pode copiar e recortar os elementos presentes no array. Estrutura: slice(indice inicial, indice final)
const hobbitts = arr.slice(0,4)
const outros = arr.slice(-4) //O número negativo conta de trás para frente
console.log(arr)
console.log(hobbitts)
console.log(outros)

//concat: juntar arrays
const sociedade = hobbitts.concat(outros, "Boromir")
console.log(sociedade)



//SUBSTITUINDO OS ELEMENTOS

//splice: pode remover um grupo de elementos do array substituindo-os por outros. Estrutura: splice(onde começar a remover os elementos, quantos elementos serão removidos, elementos substitutos)
const a = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(a)



// ITERAR SOBRE OS ELEMENTOS DO ARRAY (PERCORRER)
for (let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}