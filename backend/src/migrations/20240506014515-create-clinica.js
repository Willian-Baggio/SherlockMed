'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clinicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      crm: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.STRING
      },
      convenio_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'convenios', key: 'id' }
      },
      especialidade_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'especialidades', key: 'id' }
      },
      endereco: {
        type: Sequelize.STRING
      },
      horarioFuncionamento: {
        type: Sequelize.STRING
      },
      telefone1: {
        type: Sequelize.STRING
      },
      telefone2: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.TEXT
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clinicas');
  }
};