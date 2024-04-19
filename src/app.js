const express = require('express');
const routes = require('./routes')

require('./database/connection');

const app = express();

app.use(express.json());
app.use(routes)
const PORT = 8080;


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
