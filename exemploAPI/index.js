//importação
const express = require('express');
const calculadoraRoute = require('./routes/calculadora')
const produtosRoute = require('./routes/produto')
const cors = require('cors');

// configuração do express
const app = express();
app.use(express.json());
app.use(cors());

//configuração das rodas
app.use('/calculadora', calculadoraRoute);
app.use('/produto', produtosRoute)

app.listen(3000, () =>
console.log('Servidor rodando na porta: 3000'));