const express = require('express');
const router = express.Router();
const prodController = require('../controllers/produtosController');

router.post('/', prodController.addprodutos);
router.get('/', prodController.getprodutos);
router.get('/:id', prodController.getprodutosID);
router.put('/:id', prodController.putprodutosID);
router.delete('/:id', prodController.deleteprodutosID);

module.exports = router;