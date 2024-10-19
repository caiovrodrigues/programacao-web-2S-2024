const express = require("express");
const mustacheExpress = require("mustache-express")

const app = express();

app.engine("html", mustacheExpress());
app.set("view-engine", "html");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    let temInscritos = inscritos.length > 0;
    res.render("index.html", {inscritos, temInscritos});
});

app.post("/dados", (req, res) => {
    let form = Object.entries(req.body);

    let campos = {...req.body};

    let camposNaoPreenchidos = form.filter(campo => campo[1] == '').map(campoVazio => campoVazio[0]);

    if(camposNaoPreenchidos.length != 0){
        res.render("index.html", {camposNaoPreenchidos, inscritos});
        return;
    }
    inscritos.push(campos);

    res.render("dados.html", campos);
});

app.listen(8080, () => {
    console.log("App escutando na porta 8080");
});

let inscritos = [
    {
    nome: 'Caio Vinícius',
    endereco: 'Planaltina DF',
    telefone: '(61) 9 9599-1234',
    dataAgendamento: '2024-11-01'
  }
];