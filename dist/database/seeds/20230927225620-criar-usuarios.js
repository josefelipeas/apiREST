"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Felipe',
        email: 'flp1408@mail.com',
        password_hash: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Felipe 2',
        email: 'flp1409@mail.com',
        password_hash: await bcryptjs.hash('87654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Felipe 3',
        email: 'flp1410@mail.com',
        password_hash: await bcryptjs.hash('78456123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(sequelize) {
    return sequelize;
  },
};
