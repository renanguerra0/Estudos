import express from "express";

const app = express();
//Middleware: ter acesso as requisições/respotas e executar ações.
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) =>{
    res.status(200).json(livros)

});

app.post("/livros", (req, res) =>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso.")
});


export default app;


//Códigos http:
//200: requisão com sucesso
//201: criado com sucesso