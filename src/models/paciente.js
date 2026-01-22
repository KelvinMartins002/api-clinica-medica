// src/models/paciente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Paciente = sequelize.define('Paciente', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING(150), allowNull: false },
  cpf: { type: DataTypes.STRING(14), allowNull: false, unique: true },
  email: { type: DataTypes.STRING(150), allowNull: true },
  telefone: { type: DataTypes.STRING(30), allowNull: true },
  endereco: { type: DataTypes.STRING(200), allowNull: true },
  data_nascimento: { type: DataTypes.DATEONLY, allowNull: true }
}, {
  tableName: 'Paciente',
  timestamps: false
});

module.exports = Paciente;
