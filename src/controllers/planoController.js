// src/controllers/planoController.js
const { PlanoDeSaude } = require('../models');

async function createPlano(req, res) {
  try {
    const plano = await PlanoDeSaude.create(req.body);
    return res.status(201).json(plano);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function listPlanos(req, res) {
  const planos = await PlanoDeSaude.findAll();
  return res.json(planos);
}

module.exports = { createPlano, listPlanos };
