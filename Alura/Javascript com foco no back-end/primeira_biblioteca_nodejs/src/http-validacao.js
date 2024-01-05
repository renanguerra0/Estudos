import chalk from "chalk";

function extraiLinks (arrLinks) {

    //O método "Object.values" retorna cada valor de um objeto como um array.
    //Para previnir isso, utilizamos o método "join" (retira o conteúdo de um array transformando-o em uma String).
    return arrLinks.map((objetoLInk) => Object.values(objetoLInk).join())
}

async function checaStatus (listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map( async (url) => {
            try{
                const response = await fetch(url)
                return response.status; 
            }
            catch (erro){
                return manejaErros(erro);
            }

        })
    )
    return arrStatus;
};


function manejaErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'link não encontrado'
    } else {
        return 'ocorreu algum erro'
    }
};

export default async function listaValidada(listaDeLinks){
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
    // console.log(status);
    // return status;
};


