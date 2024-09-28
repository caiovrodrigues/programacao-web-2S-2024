const express = require("express");
const estoqueService = require("./estoque-service");

const app = express();

app.get("/adicionar/:id/:nome/:qtd", (req, res) => {
    const {id, nome, qtd} = req.params;
    const itemSaved = estoqueService.addItemToEstoque(id, nome, qtd);
    res.send(itemSaved);
});

app.get("/listar", (req, res) => {
    res.send(estoqueService.listaItensDoEstoque());
});

app.get("/remover/:id", (req, res) => {
    const id = req.params.id;
    estoqueService.deleteItemById(id);
    res.send(`item com o id ${id} excluído com sucesso.`);
});

app.get("/editar/:id/:qtd", (req, res) => {
    const {id, qtd} = req.params;
    const itemEditado = estoqueService.editarItem(id, qtd);
    res.send(itemEditado);
});

app.listen(8080, () => {
    console.log("api de estoque rodando na porta 8080");
});