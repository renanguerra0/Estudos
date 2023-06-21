
//Array 
/*const array = [1, 2 , 3]
console.log(array)

//Array bidimensional
const arrayBidimensional = [[1, 2 ,3]]
console.log(arrayBidimensional)
*/

//Testando os diferentes arrays.
const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
  ]

console.log(arr)
console.log(arr[2])
console.log(arr[1][2])
console.log(arr[2][1][0])


const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
//O termo ".table" tenta exibir os dados em formato de tabela
console.table(matriz)

// matriz.push(["Nova linha"])
// matriz[0].push("Nova coluna")

// console.table(matriz)

//Iterando sobre arrays bidimensionais (ou de qualquer dimensão)
//Podemos usar vários níveis de laços FOR para iterar pela matriz
for (i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
    const elemento = matriz[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
}
}
