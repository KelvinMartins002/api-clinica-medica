// src/models/index.js
const sequelize = require('../config/database');

const PlanoDeSaude = require('./planoDeSaude');
const Paciente = require('./paciente');
const Medico = require('./medico');
const Consulta = require('./consulta');
const Receita = require('./receita');
const Pagamento = require('./pagamento');

// Associations
PlanoDeSaude.hasMany(Paciente, { foreignKey: 'plano_id' });
Paciente.belongsTo(PlanoDeSaude, { foreignKey: 'plano_id' });

Paciente.hasMany(Consulta, { foreignKey: 'paciente_id' });
Consulta.belongsTo(Paciente, { foreignKey: 'paciente_id' });

Medico.hasMany(Consulta, { foreignKey: 'medico_id' });
Consulta.belongsTo(Medico, { foreignKey: 'medico_id' });

Consulta.hasOne(Receita, { foreignKey: 'consulta_id' });
Receita.belongsTo(Consulta, { foreignKey: 'consulta_id' });

Consulta.hasMany(Pagamento, { foreignKey: 'consulta_id' });
Pagamento.belongsTo(Consulta, { foreignKey: 'consulta_id' });

module.exports = {
  sequelize,
  PlanoDeSaude,
  Paciente,
  Medico,
  Consulta,
  Receita,
  Pagamento
};
