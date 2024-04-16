import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';

const caminho = process.argv;
// console.log(caminho) //Podemos observar que trás como 3º resultado o que escrevemos no terminal
// console.log(caminho[2]);

//Basta escrever no console: node aula1/src/cli.js ./aula1/arquivos/texto.md
// pegaArquivo(caminho[2]);

function imprimeLista(resultado, identificador = ''){
    console.log(
        chalk.yellow('lista de links'),
        chalk.black.bgGreen(identificador), 
        resultado)
};


async function processaTexto(argumentos){
    
    const caminho = argumentos[2];
    let cont = 0;

    //Utilizando o try catch apenas para tratar o erro
    try{
        fs.lstatSync(caminho);
    }
    catch (erro){
        if (erro.code === "ENOENT"){
            console.log("Arquivo ou diretório não existe.")
            return;
        }  
    }

    if (fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(resultado);

    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(lista, nomeDeArquivo);
        });
    };
};

processaTexto(caminho);