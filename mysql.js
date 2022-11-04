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
conection.query('INSERT INTO Users(ID,RUN,Names,Mother_Name,Father_Namer,Gender,Birthday,Password,Email,Deleted_At,Telefono) VALUES ('';'20250243','Fabrizzio','Rojo','Hormazabal','Masculino','2000-01-27','a','fabri@hotmail.com','','55555555')',(err,rows) =>{
   
});

conection.end()