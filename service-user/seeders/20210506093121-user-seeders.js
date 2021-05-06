'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('users', [
       {
       name: "John Doe",
       profession: "Admin star",
       role: "admin",
       email: "starindonesia@gmail.com",
       password: await bcrypt.hash('indonesia', 10),
       created_at: new Date(),
       updated_at: new Date()
       },
       {
        name: "John Lorem",
        profession: "Backend developer",
        role: "student",
        email: "johnlorem@gmail.com",
        password: await bcrypt.hash('laravelgo', 10),
        created_at: new Date(),
        updated_at: new Date()
        }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('users', null, {});
  }
};
