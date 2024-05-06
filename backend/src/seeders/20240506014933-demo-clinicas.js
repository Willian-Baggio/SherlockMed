'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clinicas', [
      {
        nome: 'Clínica 1',
        crm: '123456',
        cnpj: '67.688.375/0001-67',
        convenio_id: 1,
        especialidade_id: 1,
        endereco: 'Quadra QS 619 Área Especial 1 EC619',
        horarioFuncionamento: '18 horas',
        telefone1: '4199999999',
        telefone2: '4188888888',
        email: 'clinica1@gmail.com',
        website: 'clinica1.com.br',
        descricao: 'Clínica de ortopedia',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Clínica 2',
        crm: '654321',
        cnpj: '84.974.788/0001-27',
        convenio_id: 2,
        especialidade_id: 2,
        endereco: 'Rua Amor-perfeito',
        horarioFuncionamento: '18 horas',
        telefone1: '4177777777',
        telefone2: '4166666666',
        email: 'clinica2@gmail.com',
        website: 'clinica2.com.br',
        descricao: 'Clínica de odontologia',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Clínica 3',
        crm: '1987654',
        cnpj: '08.329.616/0001-12',
        convenio_id: 3,
        especialidade_id: 3,
        endereco: 'Travessa Barros Rego',
        horarioFuncionamento: '18 horas',
        telefone1: '4155555555',
        telefone2: '4144444444',
        email: 'clinica3@gmail.com',
        website: 'clinica3.com.br',
        descricao: 'Clínica de cardiologia',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clinicas', null, {});
  }
};
