const form = document.getElementById('LoginFormtest');
const { ipcRenderer } = require('electron');
const main = require('./main');

form.addEventListener('submit', async(e) => {
    
    const usuarioForma = document.getElementById('Email').value;
    const claveForma = document.getElementById('Password').value;
    const estadoUsuario = await main.consultarUsuario(usuarioForma, claveForma);

    if (typeof estadoUsuario == 'undefined') {
        document.getElementById('mensaje').innerHTML = 'Usuario o Clave INVALIDA';
    } else if (estadoUsuario.usuario == usuarioForma){
        valorMensaje = false
        ipcRenderer.send('newUsuario', estadoUsuario);
    }
    e.preventDefault();
});