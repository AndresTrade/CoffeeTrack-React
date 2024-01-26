const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Andres030191.',
    database: 'db_cafeteria'
})

app.get ('/', (req, res) =>{
    return res.json("Conexion BackEnd - MariaDb");
})

//URL USUARIOS YA REGISTRADOS
//app.get ('/usuarios', (req, res)=>{
 //   const sql = "SELECT * FROM  usuarios";
   // db.query(sql, (err, data)=>{
     //   if(err) return res.json(err);
       // return res.json(data);
//})
//})

//URL USUARIOS PARA EL LOGIN
app.get ('/login', (req, res)=>{
    const sql = "SELECT * FROM  usuarios";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
})
})

app.post ('/usuarios', (req, res)=>{
    const sql = "INSERT INTO usuarios (`Nombre`, `TipoUsuario`, `Email`, `Password`, `Telefono`, `Curso`) VALUES (?)";
    
    const values = [
        req.body.nombre,
        req.body.usuario,
        req.body.email,
        req.body.password,
        req.body.telefono,
        req.body.curso
    ]
    db.query(sql,[values], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post ('/login', (req, res)=>{
    const sql = "SELECT * FROM usuarios WHERE `Email` = ? AND `Password` = ?";

    const values = [req.body.email, req.body.password];
  
    db.query(sql, values, (err, data)=>{
       if(err) {
        console.error(err);
            return res.status(500).json({ error: "Se encontró un error en la consulta SQL" });
       }

        if(data.length > 0 ){
            return res.json("Exito")
        } else {
            return res.json("No tiene acceso")
        
                }
    })
})

app.listen(8081, () => {
    console.log("Listening on ");
})
