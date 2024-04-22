'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class especialidade_medico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  especialidade_medico.init({
    nome_especialidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'especialidade_medico',
    tableName: 'especialidades_medicas'
  });
  return especialidade_medico;
};