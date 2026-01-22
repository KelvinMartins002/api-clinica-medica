// src/routes/receitas.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/receitaController');

router.post('/', controller.createReceita);

module.exports = router;
