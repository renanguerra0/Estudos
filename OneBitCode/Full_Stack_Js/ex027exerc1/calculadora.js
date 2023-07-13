/*
opcao = "";

do {
  opcao = prompt(
    "Escolha uma das opções abaixo:\n" +
      "1. Área do Triângulo\n" +
      "2. Área do retângulo\n" +
      "3. Área do quadrado\n" +
      "4. Área do trapézio\n" +
      "5. Área do círculo\n" +
      "6. Sair"
  );

  switch (opcao) {
    case "1":
      base = prompt("Informe a base");
      altura = prompt("Informe a altura");
      function areaTriangulo(base, altura) {
        return (base * altura) / 2;
      }
      resultado = areaTriangulo(base, altura);
      alert(
        "Um triângulo com a base " +
          base +
          " e a altura " +
          altura +
          " possui uma área de " +
          resultado
      );
      break;
    case "2":
      base = prompt("Informe a base");
      altura = prompt("Informe a altura");
      function areaRetangulo(base, altura) {
        return base * altura;
      }
      resultado = areaRetangulo(base, altura);
      alert(
        "Um retângulo com a base " +
          base +
          " e a altura " +
          altura +
          " possui uma área de " +
          resultado
      );
      break;

    case "3":
      lado = prompt("Informe o lado");
      function areaQuadrado(lado) {
        return Math.pow(lado, 2);
      }
      resultado = areaQuadrado(lado);
      alert(
        "Um quadrado com o lado " + lado + " possui uma área de " + resultado
      );
      break;

    case "4":
      baseMaior = parseFloat(prompt("Informe a base maior:"));
      baseMenor = parseFloat(prompt("Informe a base menor:"));
      altura = prompt("Informe a altura:");
      function areaTrapezio(baseMaior, baseMenor, altura) {
        return ((baseMaior + baseMenor) * altura) / 2;
      }
      resultado = areaTrapezio(baseMaior, baseMenor, altura);
      alert("Um trapezio com a base maior de " + baseMaior + ", base menor " + baseMenor + " e altura de " + altura + " possui uma área de " + resultado);
      break;

    case "5":
      raio = parseFloat(prompt("Informe o raio"))
      function areaCirculo(raio){
        return 3.14 * (Math.pow(raio, 2))
      }
      resultado = areaCirculo(raio)
      alert("O circulo com raio de " + raio + " possui uma área de " + resultado)
      break

    case "6":
      alert("Encerrando...")
      break

    default:
      alert("Opção inválida, tente novamente")
      break

  }
} while (opcao != "6"){}
*/


function calcularAreaTriangulo(){
  const base = prompt("Informe a base do triângulo:")
  const altura = prompt("Informe a latura do triângulo:")
  return (base * altura)/2
}

function calcularAreaRetangulo(){
  const base = prompt("Informe a base do retângulo:")
  const altura = prompt("Informe a latura do retângulo:")
  return base * altura
}

function calcularAreaQuadrado(){
  const lado = prompt("Informe o lado do quadrado")
  return lado * lado
}

function calcularAreaTraprezio(){
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio"))
  const altura = prompt("Informe a altura do trapézio")
  return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo(){
  const raio = prompt("Informe o raio do círculo")
  return 3.14 * raio * raio
}

function exibirMenu(){
  return prompt("CALCULADORA GEOMÉTRICA:\n" + "1. Calcular área do triângulo\n" + "2. Calcular área do retângulo\n" +
  "3. Calcular área do quadrado\n" + "4. Calcular área do trapézio\n" + "5. Calcular área do círculo\n" + "6. Sair\n")
}

function executar(){
  let opcao = ""

  do {
    opcao = exibirMenu()  //Chamando a função para exibir o menu

    let resultado

    switch (opcao){
      case "1":
        resultado = calcularAreaTriangulo()
        break
      case "2":
        resultado = calcularAreaRetangulo()
        break
      case "3":
        resultado = calcularAreaQuadrado()
        break
      case "4":
        resultado = calcularAreaTraprezio()
        break
      case "5":
        resultado = calcularAreaCirculo()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }
  
    if (resultado){
      alert("Resultado: " + resultado) //Informa na tela o resultado de uma das funções
    }

  } while(opcao != "6"){}
}

executar()