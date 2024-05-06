'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinica extends Model {
    static associate(models) {
      Clinica.hasMany(models.Convenio, {
        foreignKey: 'convenio_id'
      })
      Clinica.hasMany(models.Especialidade, {
        foreignKey: 'especialidade_id'
      })
    }
  }
  Clinica.init({
    nome: DataTypes.STRING,
    crm: DataTypes.STRING,
    cnpj: DataTypes.STRING,
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
    tableName: 'convenios'
  });
  return Clinica;
};