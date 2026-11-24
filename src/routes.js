const express = require('express');
const router = express.Router();

const usuarioController = require('./controllers/usuario');
router.post('/usuario/login', usuarioController.login)
router.get('/usuario', usuarioController.listar);
router.get('/usuario/:id', usuarioController.buscarPorId);
router.post('/usuario', usuarioController.criar);
router.put('/usuario/:id', usuarioController.atualizar);
router.delete('/usuario/:id', usuarioController.deletar);

const ocorrenciaController = require('./controllers/ocorrencia');
router.get('/ocorrencia/resumo', ocorrenciaController.resumo);
router.get('/ocorrencia', ocorrenciaController.listar);
router.get('/ocorrencia/:id', ocorrenciaController.buscarPorId);
router.post('/ocorrencia', ocorrenciaController.criar);
router.put('/ocorrencia/:id', ocorrenciaController.atualizar);
router.delete('/ocorrencia/:id', ocorrenciaController.deletar);

module.exports = router;