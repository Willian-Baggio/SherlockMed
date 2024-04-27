'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('especialidades_medicas', [
      {
       especialidade: 'ortopedia' 
      },
      {
        especialidade: 'cardiologia' 
      },
      {
        especialidade: 'gia 3' 
      },
      {
        especialidade: 'gia 4' 
      },
      {
        especialidade: 'gia 5' 
      },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('especialidades_medicas', null, {});
     
  }
};
