//Hacer la conexion a la base de datos
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'database depresion'
})

function getConnection(){
    return connection;
}

module.exports= { getConnection }