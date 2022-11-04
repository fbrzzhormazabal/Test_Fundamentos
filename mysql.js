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


//Ejemplo de consulta
conection.query('SELECT * from Users', (err, rows) =>{
    if (err) throw err
    console.log('Los datos de la tabla son estos: ')
    console.log(rows)
})

conection.end()