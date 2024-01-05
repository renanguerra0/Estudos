
//Fs é uma biblioteca nativa do NodeJs
import fs from 'fs';

//Para ser possível realizarmos a importação dessa maneira, é preciso ir no arquivo "package.json" e digitarmos o seguinte: "type": "module"
import chalk from 'chalk';
console.log(chalk.blue('Testando a lib chalk'));


//Mostrar somente os título e links do texto
function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; //O Js reconhece as expressões regulares (regex) englobadas entre /exemplo/
    // const capturas = texto.match(regex);
    // const capturas = regex.exec(texto);
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map( captura => ({[captura[1]]: captura[2]}) );
    // console.log(resultados);
    return resultados.length !== 0 ? resultados : "Não há links no arquivo";
};


//Capturar erros
function trataErro(erro){
    // throw new Error(erro);
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório')); //O objeto "Error" tem uma propriedade chamada "code", que é o código do erro.
};


//Buscando arquivo na máquina com uma função ASSÍCRONA (MÉTODO 1 - Async/Await)
async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    } catch(erro){
        trataErro(erro);
    }
};

export default pegaArquivo;

//Buscando arquivo na máquina com uma função ASSÍCRONA (MÉTODO 2 - Then)
// function pegaArquivo(caminhoDoArquivo){
//     const enconding = 'utf-8'; //formato
//     fs.promises //Promises = código assíncrono
//         .readFile(caminhoDoArquivo, enconding) 
//         .then((texto) => console.log(chalk.green(texto))) //Retornando a resposta da Promise com o then
//         .catch(trataErro) //.catch((erro) => trataErro(erro))
// };

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

// pegaArquivo('./aula1/arquivos/texto.md');
// pegaArquivo('./aula1/arquivos');

//Criamos um arquivo chamado ".gitignore" com intuito de ao subir o código para o GitHub,
//a pasta "node_modules" não ser incluída.