const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.Inserir);
router.get('/', usuarioController.obterTodos);
router.get('/id/:id', usuarioController.buscarId);
router.get('/:email', usuarioController.obterPorEmail);
router.post('/autenticar', usuarioController.autenticar);

module.exports = router;