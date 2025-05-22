// Importar modelo de usuário (simulando um banco de dados, etc.)
const UsuarioModel = require('../models/Usuario');

// Lógica para criar um novo usuário
exports.Inserir = async (req, res) => {
    const { nome, email, senha, ativo } = req.body;
    const usuario = {
        nome, email, senha, ativo
    }
    try {
        await UsuarioModel.create(usuario);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.obterTodos = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
exports.obterPorEmail = async (req, res) => {
    const {email} = req.params;
    try{
        const usuario =
                    await UsuarioModel.findOne({email:email});
        if(!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
    }catch(error){
        res.status(500).json({error:error})
        }
    };

exports.buscarId = async (req, res) => {
    const user = await UsuarioModel.findOne({ _id: req.params.id });
    if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
    };
    
exports.autenticar = async (req,res) => {
    const { senha, email} = req.body;

    try{
    const usuario = await UsuarioModel.findOne({email:email})

    if(!usuario){
        return res.status(404).json({message: 'Usuário não encontrado'})
    }

    if (usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'Senha incorreta!' });
    }
    return res.status(200).json({ mensagem: 'Usuário autenticado com sucesso!' });
    }catch (erro) {
        console.error(erro);
        return res.status(500).json({ mensagem: 'Erro interno no servidor!' });
}
}