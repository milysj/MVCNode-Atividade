const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');


router.get('/veiculos', veiculoController.listar);
router.get('/veiculos/novo', veiculoController.formNovo);
router.post('/veiculos/novo', veiculoController.salvarNovo);
router.get('/veiculos/editar/:id', veiculoController.formEditar);
router.post('/veiculos/editar/:id', veiculoController.salvarEdicao);
router.post('/veiculos/excluir/:id', veiculoController.excluir);

module.exports = router;