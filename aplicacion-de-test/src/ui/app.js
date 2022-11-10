const RegistroForm = document.getElementById('RegistroForm');

const { remote} = require('electron');
const main = remote.require('./main');


const userNombre = document.getElementById('Nombre');
const userApellido_p = document.getElementById('Apellido_p');
const userApellido_m = document.getElementById('Apellido_m');
const userBirth = document.getElementById('Fecha_nacimiento');
const userRUN = document.getElementById('Run');
const userDv = document.getElementById('Dv')
const userGenero = document.getElementById('Genero');
const userTelefono = document.getElementById('Telefono');
const userEmail = document.getElementById('Email');
const userPass = document.getElementById('Contraseña');


RegistroForm.addEventListener('submit',() => {

    const newUser = {
        Names: userNombre.value,
        Father_Name: userApellido_p.value,
        Mother_Name: userApellido_m.value,
        Birthday: userBirth.value,
        RUN: userRUN.value,
        Gender: userGenero.value,
        Telefono: userTelefono.value,
        Email: userEmail.value,
        Password: userPass.value,   
        Dv: userDv.value
    }
    main.createUser(newUser)
})