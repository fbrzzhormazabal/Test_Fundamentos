const { ipcRenderer } = require('electron')
const main = require('./main');
const form = document.getElementById('LoginFormtestv2');

let btnlogin;
let email; 
let password;

form.addEventListener('submit', async(e) => {
    
    usuarioForma = document.getElementById('email')
    claveForma = document.getElementById('password')
    btnlogin = document.getElementById('login')
    const obj = {email:email.value, password:password.value }
    btnlogin.onclick = ipcRenderer.invoke("login",obj)
    
})