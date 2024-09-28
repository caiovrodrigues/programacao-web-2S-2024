const db = require("./database-in-memory");

const addItemToEstoque = (id, nome, qtd) => {
    const newItem = {id, nome, qtd};
    db.estoque.push(newItem);
    return newItem;
};

const listaItensDoEstoque = () => [...db.estoque];

const deleteItemById = (id) => {
    const indexItem = findIndexItemById(id);
    db.estoque.splice(indexItem, 1);
};

const editarItem = (id, novaQtd) => {
    const indexItem = findIndexItemById(id);
    db.estoque[indexItem].qtd = novaQtd;
    return db.estoque[indexItem];
}

const findIndexItemById = (id) => {
    const indexItem = db.estoque.findIndex(item => item.id == id);
    if(indexItem == -1){
        throw new Error(`item com o id ${id} não existe.`);
    }
    return indexItem;
}

module.exports = {
    addItemToEstoque,
    listaItensDoEstoque,
    deleteItemById,
    editarItem
}