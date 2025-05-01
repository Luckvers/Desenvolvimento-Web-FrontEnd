const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Word!')
});

app.get('/somar', (req, res) => {
    const {n1, n2} = req.query;
    //const n1 = parseInt(req.query.n1);
    //const n2 = parseInt(req.query.n2);
    const resultado = parseInt(n1) + parseInt(n2);
    res.json({ resultado });
});

app.get('/calcular', (req, res) => {
    const {n1, n2, operacoes} = req.query;
    let resultado = 0;
   switch(operacoes) {
    case 'somar':
    resultado = parseInt(n1) + parseInt(n2);
    break;
    case 'subtrair':
    resultado = parseInt(n1) - parseInt(n2);
    break;
    case 'multiplicar':
    resultado = parseInt(n1) * parseInt(n2);
    break;
    case 'dividir':
    resultado = parseInt(n1) / parseInt(n2);
    break;
    default:
        return res.status(400).json({error: 'Operação inválida'})
   }
   res.json({n1, n2, operacoes,resultado});
});
const produtos = [];
let ultimoId = 1;
app.post('/produto', (req, res) => {
    const {nome, valor, temEstoque} = req.body;
    const produto = { id: ultimoId,nome, valor, temEstoque};
    ultimoId++;
    produtos.push(produto);
    res.status(201).json(produto);
});

app.get('/produto', (req, res) => {
    res.json(produtos);
});

app.get('/produto/:id', (req, res) => {
    const produtoid = parseInt(req.params.id); // Get the ID from the URL parameter
    const produto = produtos.find(produto => produto.id === produtoId); // Find the item by ID
6 
    if (produto) {
        res.json(produtoid); // Return the item if found
    } else {
        res.status(404).send('produto not found'); // Return 404 if not found
    }
});
app.listen(3000, () =>
console.log('Servidor rodando na porta: 3000'));