const LoginForm = document.getElementById('LoginForm');

const { remote } = require('electron');
const main = remote.require('./main');

const userEmail = document.getElementById('Email');
const userPass = document.getElementById('Password');

LoginForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const newUser = {

        Email: userEmail.value,
        Password: userPass.value

    }
    main.validateUser(newUser)
})