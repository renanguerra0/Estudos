
/*
let filaDeEspera = ["João", "Maria", "Joana", "Carlos"]
let opcao = ""


do {

    opcao = prompt("Fila de espera: \n" + filaDeEspera + "\n1. Novo Paciente" 
    + "\n2. Consultar Paciente" + "\n3. Sair" )

    switch (opcao){
        case "1":
            let novoPaciente = prompt("Informe o nome do novo paciente: ")
            filaDeEspera.push(novoPaciente)
        break

        case "2":
            consultarPaciente = filaDeEspera.shift()
            alert("O paciente " + consultarPaciente + " foi consultado!")
        break

        case "3":
            alert("Encerrando o programa...")
    }


} while (opcao !== "3") {}
*/


let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i= 0; i < fila.length; i++){
        pacientes += (i + 1) + "º - " + fila[i] + "\n"

    }

    opcao = prompt("Fila de espera:\n" + pacientes + "\n1. Novo paciente" + "\n2. Consultar paciente" + "\n3. Sair")

    switch (opcao){
        case "1":
            const novoPaciente = prompt("Informe o nome do novo paciente")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (pacienteConsultado){
                alert("O paciente " + pacienteConsultado + " foi consultado") //Se o ARRAY possuir algum dado.
            } else {
                alert("Não há paciente na fila de espera") //Se o ARRAY estiver vazio.
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
            break
    }

} while (opcao != 3) {}
