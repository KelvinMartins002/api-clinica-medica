// src/models/consulta.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Consulta = sequelize.define('Consulta', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  data_hora: { type: DataTypes.DATE, allowNull: false },
  valor: { type: DataTypes.DECIMAL(12,2), allowNull: false },
  status: { 
    type: DataTypes.ENUM('AGENDADA','CONFIRMADA','CANCELADA','REALIZADA','NAO_COMPARECEU'), 
    allowNull: false, defaultValue: 'AGENDADA' 
  }
}, {
  tableName: 'Consulta',
  timestamps: false
});

module.exports = Consulta;
