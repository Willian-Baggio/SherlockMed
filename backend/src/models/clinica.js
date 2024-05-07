'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinica extends Model {
    static associate(models) {
      Clinica.hasMany(models.Convenio, {
        foreignKey: 'id'
      })
      Clinica.hasMany(models.Especialidade, {
        foreignKey: 'id'
      })
    }
  }
  Clinica.init({
    nome: DataTypes.STRING,
    crm: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    convenio_id: DataTypes.INTEGER,
    especialidade_id: DataTypes.INTEGER,
    endereco: DataTypes.STRING,
    horarioFuncionamento: DataTypes.STRING,
    telefone1: DataTypes.STRING,
    telefone2: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Clinica',
    tableName: 'clinicas'
  });
  return Clinica;
};