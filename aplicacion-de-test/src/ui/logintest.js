/*
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
*/
const { remote, ipcRenderer } = require('electron');
const main = require('../main');
const form = document.querySelector('LoginFormtest');

form.addEventListener('submit', async(e) => {
    const usuarioForma = document.querySelector('#email').value;
    const claveForma = document.querySelector('#password').value;
    const estadoUsuario = await main.consultarUsuario(usuarioForma, claveForma);
    if (typeof estadoUsuario == 'undefined') {
        document.getElementById('login').innerHTML = 'Usuario o Clave INVALIDA';
        console.log("Usuario no encontrado")
    } else if (estadoUsuario.email == usuarioForma){
        valorMensaje = false       
        ipcRenderer.send('newUsuario', estadoUsuario);
    }   
    e.preventDefault();
});