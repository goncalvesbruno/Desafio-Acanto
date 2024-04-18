const bd = require("./connection");
const express = require("express");
const app = express();

const PORT = 8080;

/*  Teste do modulo connection
console.log(bd)
*/

app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port ${PORT}`);
})

app.get("/", (req, res)=>{
    const select = "SELECT * FROM equipes;"
    bd.query(select, (err, results) => {
        if(err){
            console.log(err)
        } else res.send(results)  
    })
})

