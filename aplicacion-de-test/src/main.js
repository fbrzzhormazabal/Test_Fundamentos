const {BrowserWindow, ipcMain, app } = require('electron')
const path = require('path')
const {getConnection} = require('./database')


let window
//let winlogin

function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    })

    window.loadFile('src/ui/index.html')
}
/*
function loginWindow () {
    winlogin = new BrowserWindow({
     width: 800,
     height: 600,
     webPreferences: {
      // nodeIntegration: true,
      // contextIsolation:true,
      // devTools:false,
       
       
     }
    }) 
   winlogin.loadFile('src/ui/logintestv2.html')
}
*/

async function createUser(User){
    try{
        const conn = await getConnection();
        const result = await conn.query('INSERT INTO users SET ?', User)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

async function consultarUsuario(email, password){
        const conn = await getConnection();
        const result = await conn.query('SELECT * FROM users WHERE Email = ? And Password =?', [email, password])
        console.log(result)
        return result[0];
}

/*
//login.js
async function validateUser(User){
    try{
        const conn = await getConnection();
        const result = await conn.query('SELECT INTO users WHERE Email=? AND Password=?', User)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
*/


//logintestv2.js forma 2
ipcMain.handle('login', (event, obj) => {
    validatelogin(obj)
  });

async function validatelogin(obj) {
    try {
        const conn = await getConnection();
        const result = await conn.query('SELECT * FROM users WHERE Email=? AND Password=?',[email, password])
        const { email, password } = obj 
        console.log(result)
    } catch (error) {
        console.log(error)
    }    
}


/*
//logintestv2.js forma 1
ipcMain.handle('login', (event, obj) => {
    validatelogin(obj)
  });
  
async function validatelogin(obj) {
   const { email, password } = obj
   const conn = await getConnection()  
   const result = await conn.query("SELECT * FROM users WHERE Email=? AND Password=?")
    conn.query(result, [email, password], (error, results, fields) => {
      if(error){ 
        console.log(error);
    } 
      if(results.length > 0){
         new Notification({
            title:"login",
            body:"Conectado"
         }).show()
       }else{
         new Notification({
           title:"login",
           body: 'email o password equivocado'
         }).show()
       }     
    });
}
*/

module.exports = {
    createWindow,
    createUser,         
    consultarUsuario,
    validatelogin
    //loginWindow,    
    //validateUser,
}