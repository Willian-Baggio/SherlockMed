'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Convenio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Convenio.belongsToMany(models.Clinica_Medica, {
        foreignKey: 'convenio_id'
      })
    }
  }
  Convenio.init({
    convenio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Convenio',
    tableName: 'convenio'
  });
  return Convenio;
};