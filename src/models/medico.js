// src/models/medico.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medico = sequelize.define('Medico', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING(150), allowNull: false },
  especialidade: { type: DataTypes.STRING(100), allowNull: true },
  crm: { type: DataTypes.STRING(40), allowNull: false, unique: true },
  telefone: { type: DataTypes.STRING(30), allowNull: true },
  email: { type: DataTypes.STRING(150), allowNull: true }
}, {
  tableName: 'Medico',
  timestamps: false
});

module.exports = Medico;
