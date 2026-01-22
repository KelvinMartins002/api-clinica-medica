// src/controllers/consultaController.js
const { Consulta, Paciente, Medico, Pagamento } = require('../models');
const { validarPlano } = require('../services/validarPlano');

async function createConsulta(req, res) {
  try {
    const { paciente_id } = req.body;
    const val = await validarPlano(paciente_id);
    if (!val.valido) return res.status(400).json({ error: 'Plano inválido: ' + (val.motivo || '-') });

    const consulta = await Consulta.create(req.body);
    return res.status(201).json(consulta);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function listConsultas(req, res) {
  const consultas = await Consulta.findAll({
    include: [ { model: Paciente }, { model: Medico } ],
    order: [['data_hora','ASC']]
  });
  return res.json(consultas);
}

async function relatorioFinanceiro(req, res) {
  const { sequelize } = require('../models');
  const { ano } = req.query;
  let where = '';
  const replacements = {};
  if (ano) { where = "WHERE date_part('year', p.data_pagamento) = :ano"; replacements.ano = parseInt(ano,10); }
  const sql = `
    SELECT date_trunc('month', p.data_pagamento) AS mes,
           SUM(p.valor) AS total_recebido,
           COUNT(*) AS quantidade_pagamentos,
           AVG(p.valor) AS media_pagamento
    FROM "Pagamento" p
    ${where}
    GROUP BY 1
    ORDER BY 1 DESC;
  `;
  const [results] = await sequelize.query(sql, { replacements });
  return res.json(results);
}

module.exports = { createConsulta, listConsultas, relatorioFinanceiro };
