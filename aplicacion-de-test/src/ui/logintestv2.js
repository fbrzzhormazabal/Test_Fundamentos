const { ipcRenderer } = require('electron')
const main = require('./main');
const form = document.getElementById('LoginFormtestv2');

let btnlogin;
let email; 
let password;

LoginFormtestv2.addEventListener('submit', async(e) => {
    
    email = document.getElementById('email')
    password = document.getElementById('password')
    btnlogin = document.getElementById('login')
    const obj = {email:email.value, password:password.value }
    btnlogin.onclick = ipcRenderer.invoke("login",obj)
    
    ipcRenderer.invoke("login",obj)
})