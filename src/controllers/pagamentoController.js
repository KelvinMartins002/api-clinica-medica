// src/controllers/pagamentoController.js
const { Pagamento } = require('../models');

async function createPagamento(req, res) {
  try {
    const pagamento = await Pagamento.create(req.body);
    return res.status(201).json(pagamento);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = { createPagamento };
