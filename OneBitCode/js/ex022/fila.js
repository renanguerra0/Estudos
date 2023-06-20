
let filaDeEspera = ["João", "Maria", "Joana", "Carlos"]
let opcao = ""


do {

    opcao = prompt("Fila de espera: \n" + filaDeEspera + "\n1. Novo Paciente" 
    + "\n2. Consultar Paciente" + "\n3. Sair" )

    switch (opcao){
        case "1":
            let novoPaciente = prompt("Informe o novo do novo paciente: ")
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