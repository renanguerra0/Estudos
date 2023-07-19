
const hitchedSpaceships = [
    ["Fênix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]
console.log(hitchedSpaceships)

let tripulantes = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship =>{
    return spaceship[0]
})

let plataforma = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let caixaAlta = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

alert("Espaçonaves com mais de 9 tripulantes: " + tripulantes.join(", ") + "\nPlataforma com processo de engate: " + (plataforma + 1) + "\nEspaçonaves destacadas: " + caixaAlta.join(", "))