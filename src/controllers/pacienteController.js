// src/controllers/pacienteController.js
const { Paciente, PlanoDeSaude } = require('../models');

async function createPaciente(req, res) {
  try {
    const paciente = await Paciente.create(req.body);
    return res.status(201).json(paciente);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function listPacientes(req, res) {
  const pacientes = await Paciente.findAll({ include: PlanoDeSaude });
  return res.json(pacientes);
}

module.exports = { createPaciente, listPacientes };
