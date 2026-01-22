// src/routes/consultas.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/consultaController');

router.post('/', controller.createConsulta);
router.get('/', controller.listConsultas);
router.get('/relatorio-financeiro', controller.relatorioFinanceiro);

module.exports = router;
