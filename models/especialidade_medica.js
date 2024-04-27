'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Especialidade_medica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Especialidade_medica.init({
    especialidede: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Especialidade_medica',
    tableName: 'especialidades_medicas'
  });
  return Especialidade_medica;
};