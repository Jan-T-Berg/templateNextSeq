import mysql2 from 'mysql2';
var DataTypes = require('sequelize').DataTypes;
const Sequelize = require('sequelize');

let sequelize = new Sequelize(
  process.env.MYSQL_DATABASE_STORAGE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORT,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    dialectModule: mysql2,
    logging: false,
  }
);

let user = require('./user')(sequelize, DataTypes);

let db = {
  user: user,
  sequelize: sequelize,
  Sequelize: Sequelize,
};

export default db;
