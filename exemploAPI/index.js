//importação
const express = require('express');
const calculadoraRoute = require('./routes/calculadora')
const produtosRoute = require('./routes/produto')
const usuarioRoute = require('./routes/Usuario')
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

// configuração do express
const app = express();
app.use(express.json());
app.use(cors());

//configuração das rodas
app.use('/calculadora', calculadoraRoute);
app.use('/produto', produtosRoute);
app.use('/Usuario', usuarioRoute);

//Busca de variáveis de ambiente
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

//criando servidor e conectando com o Mongodb
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.osldzdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3000');
        })
    })
    .catch((err) => {
        console.log(err);
    });