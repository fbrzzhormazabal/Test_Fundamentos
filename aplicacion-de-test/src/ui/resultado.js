const ResultadoForm = document.getElementById('ResultadoForm');

const { remote } = require('electron')
const main = remote.require('./main');

const userPoint = document.getElementById('Puntos');
const userID = document.getElementById('ID_Usuario');

ResultadoForm.addEventListener('submit',(e) =>{
    e.preventDefault();

    const newData = {
        Points: userPoint.value,
        Created: userID.value
    }
    main.createAnswer(newData)
})