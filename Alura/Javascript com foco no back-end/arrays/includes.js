const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 9, 7.5];
const mediasAlunos = [alunos, medias];


// function verificarLista(aluno){

//     if(mediasAlunos[0].includes(aluno)){ //Verifica se o parâmetro que está sendo passado "aluno" está incluso no array alunos.

//         const achandoIndice = mediasAlunos[0].indexOf(aluno);
//         const achandoNota = mediasAlunos[1][achandoIndice];

//         console.log(`${aluno} tem a média ${achandoNota}.`);

//     } else {
//         console.log("Aluno não encontrado!")
//     }
// }

// verificarLista("João");

//Refatorando o código
 function verificarLista(aluno){

     if(mediasAlunos[0].includes(aluno)){ //Verifica se o parâmetro que está sendo passado "aluno" está incluso no array alunos.

        const [alunos, medias] = mediasAlunos; //Reatribui o array mediasAlunos para alunos e medias

        const indice = alunos.indexOf(aluno); //Obtém o índice do aluno que está sendo passado como parâmetro
        const nota = medias[indice] //Atribui o índice no array medias

        console.log(`${aluno} tem a média ${nota}.`);

     } else {
        console.log("Aluno não encontrado!")
     }
 }

 verificarLista("Caio");