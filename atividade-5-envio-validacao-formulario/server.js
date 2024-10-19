const express = require("express");
const mustacheExpress = require("mustache-express")

const app = express();

app.engine("html", mustacheExpress());
app.set("view-engine", "html");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.html");
});

app.post("/dados", (req, res) => {
    let form = Object.entries(req.body);
    console.log(form);

    let camposNaoPreenchidos = {...req.body};

    form.filter(campo => campo[1] != '').forEach(campoPreenchido => delete camposNaoPreenchidos[campoPreenchido[0]]);
    console.log("Cmapo não preenchidos: ", camposNaoPreenchidos);


    if(!Object.keys(camposNaoPreenchidos).length == 0){
        res.render("index.html", {camposNaoPreenchidos});
    }

    res.render("dados.html", {form});
});

app.listen(8080, () => {
    console.log("App escutando na porta 8080");
});