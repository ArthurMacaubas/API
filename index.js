const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log(req.query);
    res.send({mensagem: "parâmetro recebido pelo servidor"});
});

app.listen(1982, () => {
    let data = new Date();
    console.log("Servidor node iniciando em: " + data )
});