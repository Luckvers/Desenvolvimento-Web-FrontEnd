const produtos = [];
let ultimoId = 1;

exports.addprodutos = (req, res) => {
    const {nome, valor, temEstoque} = req.body;
    const produto = { id: ultimoId,nome, valor, temEstoque};
    ultimoId++;
    produtos.push(produto);
    res.status(201).json(produto);
}

exports.getprodutos = (req, res) => {
    res.json(produtos);
}

exports.getprodutosID = (req,res) => {
    const { id } = req.params;
    const produto = produtos.find((p) => p.id == id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
}

exports.putprodutosID = (req,res) => {
    const { id } = req.params;
    const { nome, valor, temEstoque } = req.body;
    const produto = produtos.find((p) => p.id == id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produto.nome = nome;
    produto.valor = valor;
    produto.temEstoque = temEstoque;
    res.json(produto);
}
exports.deleteprodutosID = (req,res) => {
    const { id } = req.params;
    const index = produtos.findIndex((p) => p.id == id);
    if (index === -1) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produtos.splice(index, 1);
    res.status(204).send();
}