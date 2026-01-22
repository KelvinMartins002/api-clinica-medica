// src/services/validarPlano.js
const { Paciente, PlanoDeSaude } = require('../models');

async function validarPlano(pacienteId) {
  const paciente = await Paciente.findByPk(pacienteId, { include: PlanoDeSaude });
  if (!paciente) throw new Error('Paciente não encontrado');
  if (!paciente.PlanoDeSaude) return { valido: false, motivo: 'Paciente sem plano' };
  if (!paciente.PlanoDeSaude.data_vencimento) return { valido: true };
  const venc = new Date(paciente.PlanoDeSaude.data_vencimento);
  const hoje = new Date();
  if (venc < hoje) return { valido: false, motivo: 'Plano vencido' };
  return { valido: true };
}

module.exports = { validarPlano };
