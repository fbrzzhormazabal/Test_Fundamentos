const RegistroForm = document.getElementById('RegistroForm');

const { remote} = require('electron');
const Main = require('electron/main');
remote.require('./main')

const userNombre = document.getElementById('Nombre');
const userApellido_p = document.getElementById('Apellido_p');
const userApellido_m = document.getElementById('Apellido_m');

RegistroForm.addEventListener('submit',() => {

    const newUser = {
        Names: userNombre.value,
        Father_Name: userApellido_p.value,
        Mother_Name: userApellido_m.value,
        
    }
    main.createUser(newUser)
})