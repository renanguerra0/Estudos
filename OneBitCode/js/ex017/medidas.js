
const valor = parseFloat(prompt("Informe o valor em metros: "))
const tipo = prompt("Informe para qual tipo deseja converter: \nMM \nCM \nDM \nDAM \nHM \nKM")

const mm = valor * 1000
const cm = valor * 100
const dm = valor * 10
const dam = valor / 10
const hm = valor / 100
const km = valor / 1000

switch (tipo) {
    case 'mm':
        alert(valor + " metros equivalem a " + mm + " milímetros")
    break
    case 'cm':
        alert(valor + " metros equivalem a " + cm + " centímetros")
    break
    case 'dm':
        alert(valor + " metros equivalem a " + dm + " decímetros")
    break
    case 'dam':
        alert(valor + " metros equivalem a " + dam + " decâmetros")
    break
    case 'hm':
        alert(valor + " metros equivalem a " + hm + " hectômetros")
    break
    case 'km':
        alert(valor + " metros equivalem a " + km + " quilômetros")
    break
    default:
        alert("Opção inválida!")
}
