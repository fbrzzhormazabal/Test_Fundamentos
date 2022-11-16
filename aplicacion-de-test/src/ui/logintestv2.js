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
     
    btnlogin.onclick = function(){

        const obj = {Email:email.value, Password:password.value }
        ipcRenderer.invoke("login",obj)
        location.href='encuesta.html'
         
    } 
    e.preventDefault();
})