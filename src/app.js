const bd = require("./connection");
const express = require("express");

const app = express();
app.use(express.json());

const PORT = 8080;


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

