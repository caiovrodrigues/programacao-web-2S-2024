const express = require("express");
const calculadora = require("./calculadora");

const app = express();
const PORT = "8080";

app.get("/somar/:num1/:num2", (req, res) => {
    const {num1, num2} = req.params;
    const resultado = calculadora.somar(Number(num1), Number(num2));
    return res.send(`${num1} + ${num2} = ${resultado}`);
});

app.get("/subtrair/:num1/:num2", (req, res) => {
    const {num1, num2} = req.params;
    const resultado = calculadora.subtrair(Number(num1), Number(num2));
    return res.send(`${num1} - ${num2} = ${resultado}`);
});

app.get("/multiplicar/:num1/:num2", (req, res) => {
    const {num1, num2} = req.params;
    const resultado = calculadora.multiplicar(Number(num1), Number(num2));
    return res.send(`${num1} * ${num2} = ${resultado}`);
});

app.get("/dividir/:num1/:num2", (req, res) => {
    const {num1, num2} = req.params;
    const resultado = calculadora.dividir(Number(num1), Number(num2));
    return res.send(`${num1} / ${num2} = ${resultado}`);
});

app.listen(PORT, () => {
    console.log(`Server escutando na porta ${PORT}`);
});