// src/routes/pagamentos.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/pagamentoController');

router.post('/', controller.createPagamento);

module.exports = router;
