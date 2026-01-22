// src/models/receita.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Receita = sequelize.define('Receita', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  descricao: { type: DataTypes.TEXT, allowNull: false },
  tempo_tratamento: { type: DataTypes.STRING(100), allowNull: true },
  dosagem: { type: DataTypes.STRING(100), allowNull: true },
  data_emissao: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW }
}, {
  tableName: 'ReceitaMedica',
  timestamps: false
});

module.exports = Receita;
