'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('convenios', [
      {
        convenio:'convenio 1'
      },
      {
        convenio:'convenio 2'
      },
      {
        convenio:'convenio 3'
      },
      {
        convenio:'convenio 4'
      },
      {
        convenio:'convenio 5'
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('convenios', null, {});
     
  }
};
