// src/routes/pacientes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/pacienteController');

router.post('/', controller.createPaciente);
router.get('/', controller.listPacientes);

module.exports = router;
