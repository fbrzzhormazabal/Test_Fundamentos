//commit test cracion archivo js
//ejemplo de funcionamiento de una funcion en js
function sum(x, y){
    // add two numbers and return result
return x + y;
}

// call function
let n = sum(10, 18);
// display the output
console.log(n);
console.log("Hola mundo")
//end of program


//conexion 
var Connection = require('database-js').Connection;

var conn =	
    //conexion con mysql. 
    new Connection("mysql://user:password@localhost/test");