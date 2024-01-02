
//Fs é uma biblioteca nativa do NodeJs
import fs from 'fs';

//Para ser possível realizarmos a importação dessa maneira, é preciso ir no arquivo "package.json" e digitarmos o seguinte: "type": "module"
import chalk from 'chalk';

console.log(chalk.blue('Testando a lib chalk'));

//Capturar erros
function trataErro(erro){
    // throw new Error(erro);
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório')); //O objeto "Error" tem uma propriedade chamada "code", que é o código do erro.
};

//Buscando arquivo na máquina com uma função ASSÍCRONA (MÉTODO 1)
function pegaArquivo(caminhoDoArquivo){
    const enconding = 'utf-8'; //formato
    fs.promises //Promises = código assíncrono
        .readFile(caminhoDoArquivo, enconding) 
        .then((texto) => console.log(chalk.green(texto))) //Retornando a resposta da Promise com o then
        .catch(trataErro) //.catch((erro) => trataErro(erro))

};

//Buscando arquivo na máquina com uma função SÍNCRONA
// function pegaArquivo(caminhoDoArquivo){
//     const enconding = 'utf-8' 
//     fs.readFile(caminhoDoArquivo, enconding, (erro,texto) => {
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));        
//     });
// };

pegaArquivo('./aula1/arquivos/texto.md');

//Criamos um arquivo chamado ".gitignore" com intuito de ao subir o código para o GitHub,
//a pasta "node_modules" não ser incluída.