const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "bruno",
        password: "admin",
        database: "futebol"
    }
);

connection.connect(function (err){
    if (err){
        console.log(err)
    } else {console.log("Connected to DB!");
}

/*  TESTE DE QUERY
connection.query("SELECT * FROM equipes", function(err, results, fields){
        if(err){
            console.log(err);
        } else console.log(results);
    })
    */
});

module.exports = connection;