const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
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

// API PARA CARGAR SALDO

app.post('/api/recarga', async (req, res) => {
    const { email, monto } = req.body;
  
    // Validación del email
    if (!email || !email.trim()) {
      return res.status(400).json({ error: 'El email no puede estar vacío' });
    }
  
    // Validación del monto
    if (!monto || isNaN(monto) || monto <= 0) {
      return res.status(400).json({ error: 'El monto debe ser un número positivo mayor a 0' });
    }
  
    try{
    // Buscar usuario
    const usuarioQuery = 'SELECT * FROM usuarios WHERE Email = ?';
    const usuarioResult = await db.query(usuarioQuery, [email], (err, results, fields) => {
    
    if (err) {
        console.error('Error al ejecutar la consulta: ' + err.stack);
        return res.status(500).json({ error: 'Error al buscar usuario' });
        }
        if (!results || results.length === 0) {
            console.log("usuarioResult:", results);
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        
        const usuario = results[0]; // El primer resultado de la consulta
        
        // Si no se encontró un ID_User
        if (!usuario || !usuario.ID_User) {
            console.log("usuario:", usuario);
            return res.status(404).json({ error: 'No se pudo encontrar el ID del usuario' });
        }
    
        // Obtener saldo del usuario desde transacciones
        const saldoQuery = `SELECT SUM(Monto) AS saldo FROM transacciones WHERE ID_User = ?`;
        const saldoResult = await db.query(saldoQuery, [usuario.ID_User]);
        
        // Verificar si hay resultados en la consulta de saldo
        if (!saldoResult || saldoResult.length === 0 || saldoResult[0].saldo === null) {
            console.log("No se encontró saldo para el usuario:", usuario.ID_User);
            return res.status(404).json({ error: 'No se pudo encontrar el saldo del usuario' });
        }
        
        const saldoActual = saldoResult[0].saldo || 0;
        
        // Actualizar saldo en transacciones
        const nuevoSaldo = saldoActual + monto;
        const transaccionSql = `INSERT INTO transacciones (ID_User, Tipo_Transaccion, Monto, Fecha_Transaccion) VALUES (?, ?, ?, ?)`;
        const transaccionValues = [usuario.ID_User, 1, monto, new Date().toISOString().substring(0, 19).replace('T', ' ')];
        
        await db.query(transaccionSql, transaccionValues);
        
        // Respuesta exitosa
        return res.status(200).json({ success: true });
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al procesar la recarga' });
  }
});


app.listen(8081, () => {
    console.log("Listening on ");
})
