// src/controllers/receitaController.js
const { Receita } = require('../models');

async function createReceita(req, res) {
  try {
    const receita = await Receita.create(req.body);
    return res.status(201).json(receita);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = { createReceita };
