const Sequelize = require('sequelize');
const configDb = require('../config/database');


const connection = new Sequelize(configDb);
 
//console.log(connection)
/*
connection.connect(function (err){
    if (err){
        console.log(err)
    } else {console.log("Connected to DB!");
}

TESTE DE QUERY
connection.query("SELECT * FROM equipes", function(err, results, fields){
        if(err){
            console.log(err);
        } else console.log(results);
    })

});
*/
module.exports = connection;