//Utilizando a lib EXPRESS
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js",
    "/livros" : "Entrei na rota livros",
    "/autores" : "Entrei na rota autores"
};

app.listen(PORT, () => {
    console.log("servidor escutando!")
});

//Utilizando a lib HTTP
/*import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js",
    "/livros" : "Entrei na rota livros",
    "/autores" : "Entrei na rota autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("servidor escutando!")
});
*/


/*
import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
 res.writeHead(200, { "Content-Type": "text/plain" });
 res.end("Curso de Node.js");
});

server.listen(PORT, () => {
 console.log("servidor escutando!");
});
*/