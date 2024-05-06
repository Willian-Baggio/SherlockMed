'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Especialidade extends Model {
    static associate(models) {
      Especialidade.belongsTo(models.Clinica, {
        foreignKey: 'especialidade_id'
      })
    }
  }
  Especialidade.init({
    especialidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Especialidade',
    tableName: 'especialidades'
  });
  return Especialidade;
};