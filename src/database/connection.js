const Sequelize = require('sequelize');
const configDb = require('../config/database');


const connection = new Sequelize(configDb);
 
try {
    connection.authenticate();
    console.log('Connection with database has been established successfully.');
} catch (error) {
    console.error('Unable do connect to the database: ', error);
}


module.exports = connection;