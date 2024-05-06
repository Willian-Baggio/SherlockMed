'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('especialidades', [
      {
        especialidade: 'Ortopedia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        especialidade: 'Odontologia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        especialidade: 'Cardiologia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        especialidade: 'Pediatria',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        especialidade: 'Oftalmologia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('especialidades', null, {});
  }
};
