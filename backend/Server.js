const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Andres030191.',
    database: 'db_cafeteria'
})

app.get ('/', (re, res) =>{
    return res.json("Del lado del Backend");
})

app.get ('/usuarios', (req, res)=>{
    const sql = "SELECT * FROM  usuarios";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
})
})

app.listen(8081, () => {
    console.log("Listening on ");
})
