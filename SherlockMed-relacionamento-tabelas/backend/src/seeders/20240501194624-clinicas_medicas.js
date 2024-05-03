'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clinicas_medicas', [
      {
        nome: 'Clínica A',
        crm: '123456',
        cnpj: '12345678901234',
        especialidade_medica_id: 1,
        convenio_id: 1,
        endereco: 'Rua A, 123',
        horarioFuncionamento: '08:00 - 18:00',
        telefone1: '123456789',
        telefone2: '987654321',
        email: 'clinicaa@email.com',
        website: 'https://www.clinicaa.com',
        descricao: 'Descrição da Clínica A',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Clínica B',
        crm: '654321',
        cnpj: '98765432109876',
        especialidade_medica_id: 2,
        convenio_id: 2,
        endereco: 'Rua B, 456',
        horarioFuncionamento: '09:00 - 19:00',
        telefone1: '987654321',
        telefone2: '123456789',
        email: 'clinicab@email.com',
        website: 'https://www.clinicab.com',
        descricao: 'Descrição da Clínica B',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clinicas_medicas', null, {});
  }
};
