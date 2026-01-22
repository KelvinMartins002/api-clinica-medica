// src/models/planoDeSaude.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PlanoDeSaude = sequelize.define('PlanoDeSaude', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING(150), allowNull: false },
  limite_cobertura: { type: DataTypes.DECIMAL(14,2), allowNull: false, defaultValue: 0 },
  data_vencimento: { type: DataTypes.DATEONLY, allowNull: true },
  operadora: { type: DataTypes.STRING(100), allowNull: true }
}, {
  tableName: 'PlanoDeSaude',
  timestamps: false
});

module.exports = PlanoDeSaude;
