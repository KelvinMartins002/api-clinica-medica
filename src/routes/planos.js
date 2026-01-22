// src/routes/planos.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/planoController');

router.post('/', controller.createPlano);
router.get('/', controller.listPlanos);

module.exports = router;
