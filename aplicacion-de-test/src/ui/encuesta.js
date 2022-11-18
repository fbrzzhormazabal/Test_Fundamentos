/*const EncuestaForm = document.getElementById('EncuestaForm');

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


RegistroForm.addEventListener('submit',(e) => {
    e.preventDefault();

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
*/

function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;

    // 1a pregunta
    if (document.getElementById('q1_r1').checked==true) {
        p1=1
    }else if(document.getElementById('q1_r2').checked==true){
        p1=0.5
    }else if(document.getElementById('q1_r3').checked==true) {       
        p1=0
    }
    // 2a pregunta
    if (document.getElementById('q2_r1').checked==true) {
        p2=1
    }else if(document.getElementById('q2_r2').checked==true){
        p2=0.5
    }else if(document.getElementById('q2_r3').checked==true) {       
        p2=0
    }
    // 3a pregunt2
    if (document.getElementById('q3_r1').checked==true) {
        p3=1
    }else if(document.getElementById('q3_r2').checked==true){
        p3=0.3
    }else if(document.getElementById('q3_r3').checked==true) {       
        p3=0
    }
    //4a pregunta 
    if (document.getElementById('q10_r1').checked==true) {
        p10=1
    }else if(document.getElementById('q10_r2').checked==true){
        p10=0.5
    }else if(document.getElementById('q10_r3').checked==true) {       
        p10=0
    }
    // 5a pregunta
    if (document.getElementById('q4_r1').checked==true) {
        p4=1
    }else if(document.getElementById('q4_r2').checked==true){
        p4=0.5
    }else if(document.getElementById('q4_r3').checked==true) {       
        p4=0
    }
    // 6a pregunta
    if (document.getElementById('q5_r1').checked==true) {
        p5=1
    }else if(document.getElementById('q5_r2').checked==true){
        p5=0.5
    }else if(document.getElementById('q5_r3').checked==true) {       
        p5=0
    }
    // 7a pregunta
    if (document.getElementById('q6_r1').checked==true) {
        p6=1
    }else if(document.getElementById('q6_r2').checked==true){
        p6=0.5
    }else if(document.getElementById('q6_r3').checked==true) {       
        p6=0
    }
    // 8a pregunta
    if (document.getElementById('q7_r1').checked==true) {
        p7=1
    }else if(document.getElementById('q7_r2').checked==true){
        p7=0.5
    }else if(document.getElementById('q7_r3').checked==true) {       
        p7=0
    }
    // 9a pregunta
    if (document.getElementById('q8_r1').checked==true) {
        p8=1
    }else if(document.getElementById('q8_r2').checked==true){
        p8=0.5
    }else if(document.getElementById('q8_r3').checked==true) {       
        p8=0
    }
    // 10a pregunta
    if (document.getElementById('q9_r1').checked==true) {
        p9=1
    }else if(document.getElementById('q9_r2').checked==true){
        p9=0.5
    }else if(document.getElementById('q9_r3').checked==true) {       
        p9=0
    }

    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    if (nota > 4) {
        alert(" usted posiblemente tiene depresion")
    } else {
        alert(" usted posiblemten no tenga depresion")
    }
    alert(" Puntos totales :" + nota);
    window.location = 'encuesta.html'
}