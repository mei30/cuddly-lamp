const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '4040', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3000
});

module.exports = sequelize;
