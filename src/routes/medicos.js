// src/routes/medicos.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/medicoController');

router.post('/', controller.createMedico);
router.get('/', controller.listMedicos);

module.exports = router;
