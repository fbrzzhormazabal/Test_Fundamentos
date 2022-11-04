//Hacer la conexion a la base de datos
const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'database depresion'
})

conection.connect((err) =>{ 
    if(err) throw err
    console.log('La conexion funciona')
})

conection.end()