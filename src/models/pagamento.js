// src/models/pagamento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pagamento = sequelize.define('Pagamento', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  valor: { type: DataTypes.DECIMAL(12,2), allowNull: false },
  data_pagamento: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW },
  forma_pagamento: { type: DataTypes.ENUM('PIX','BOLETO','CARTAO','DINHEIRO','OUTRO'), allowNull: false, defaultValue: 'PIX' },
  observacao: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: 'Pagamento',
  timestamps: false
});

module.exports = Pagamento;
