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
//Mostrando los usuarios

conection.query('SELECT * from Users', (err, rows) =>{
    if (err) throw err
    console.log('Los datos de la tabla son estos: ')
    console.log(rows)
})

//Insertando usuarios

conection.query('INSERT INTO Users(RUN,Dv,Names,Mother_Name,Father_Name,Gender,Birthday,Password,Email,Deleted_At,Telefono) VALUES ("20250242","3","Juac","Rojas","Rojas","Masculino","2000-05-15","a","juan@hotmail.com","","55555544")',(err, rows) =>{
    if(err) throw err
    console.log('Se a ingresado un nuevo Usuario')
});

//Actualizar Usuario
/*
conection.query('UPDATE Users SET Names="NActualizado", Mother_Name = "AMActualizado" WHERE ID = 4', (err, rows) =>{
    if(err) throw err
    console.log('Se a actualizao el usuario')
})
*/
//Eliminar Usuarios
/*
conection.query('DELETE FROM Users WHERE ID=', (err, rows) => {
    if(err) throw err
    console.log('Se a eliminado un usuario')

})
*/
conection.end()