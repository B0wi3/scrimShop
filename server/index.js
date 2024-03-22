const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const port = 3001;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "crudgames",
});


app.get('/', (req, res) => {
    let SQL = "INSERT INTO games ( idgames, name, cost, category ) VALUES ( '0', 'Persona 5 Royal', '300', 'JRPG' )";
    db.query(SQL, (err, result) => {
        console.error(err);
    })
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const name = req.body.name;
    const cost = req.body.cost;
    const category = req.body.category;

    let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( ?,?,? )";

    db.query(SQL, [name, cost, category], (err, result) => {
        console.error(err)
    });
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}.`);
});