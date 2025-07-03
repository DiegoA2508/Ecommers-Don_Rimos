const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'admin',
    database: 'don_rimos'
});

connection.connect((err) =>{
    if(err){
        console.error('Error de conexión a MySQL', err);
        return;
    }
    console.log('Conectado a MySQL');
});

module.exports = connection;