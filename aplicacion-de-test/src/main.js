const {BrowserWindow } = require('electron')
const {getConnection} = require('./database')

async function createUser(User){
    try{
        const conn = await getConnection();
        const result = await conn.query('INSERT INTO users SET ?', User)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

async function validateUser(User){
    try{
        const conn = await getConnection();
        const result = await conn.query('SELECT INTO users WHERE Email=? AND Password=?', User)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

let window

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

module.exports = {
    createWindow,
    createUser,
    validateUser
}