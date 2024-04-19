const express = require('express');
const routes = require('./routes')
const player = require('./models/players');
const club = require('./models/clubs');
const connection = require('./database/connection');
const PORT = 8080;

require('./database/connection');


const app = express();
app.use(express.json());

app.use(routes);

// Inicializa os models
player.init(connection);
club.init(connection);

app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port ${PORT}`);
})

/*
app.get("/", (req, res)=>{
    const select = "SELECT * FROM equipes;"
    bd.query(select, (err, results) => {
        if(err){
            console.log(err)
        } else res.send(results)
    })
})
*/
