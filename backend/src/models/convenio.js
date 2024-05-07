'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Convenio extends Model {
    static associate(models) {
      Convenio.belongsTo(models.Clinica, {
        foreignKey: 'id'
      });
    }
  }
  Convenio.init({
    convenio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Convenio',
    tableName: 'convenios'
  });
  return Convenio;
};