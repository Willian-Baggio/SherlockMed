'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinica_Medica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clinica_Medica.belongsToMany(models.Especialidade_Medica, {
        foreignKey: 'clinica_medica_id'
      });

      Clinica_Medica.belongsToMany(models.Convenio, {
        foreignKey: 'clinica_medica_id'
      })
    }
  }
  Clinica_Medica.init({
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
    modelName: 'ClinicaMedica',
    tableName: 'clinicas_medicas'
  });
  return Clinica_Medica;
};