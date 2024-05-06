'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('convenios', [
      {
        convenio: 'Convenio 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        convenio: 'Convenio 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        convenio: 'Convenio 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        convenio: 'Convenio 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        convenio: 'Convenio 5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('convenios', null, {});
  }
};
