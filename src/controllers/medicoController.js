// src/controllers/medicoController.js
const { Medico } = require('../models');

async function createMedico(req, res) {
  try {
    const medico = await Medico.create(req.body);
    return res.status(201).json(medico);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function listMedicos(req, res) {
  const medicos = await Medico.findAll();
  return res.json(medicos);
}

module.exports = { createMedico, listMedicos };
