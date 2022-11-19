const EncuestaForm = document.getElementById('FormEncuesta');
const { remote } = require('electron');
const main = remote.require('./main');

function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;

    // 1a pregunta
    if (document.getElementById('q1_r1').checked==true) {
        p1=1;

    }else if(document.getElementById('q1_r2').checked==true){
        p1=0.5;

    }else if(document.getElementById('q1_r3').checked==true) {       
        p1=0

    }else{
        console.error(error);
    }

    // 2a pregunta
    if (document.getElementById('q2_r1').checked==true) {
        p2=1

    }else if(document.getElementById('q2_r2').checked==true){
        p2=0.5

    }else if(document.getElementById('q2_r3').checked==true) {       
        p2=0

    }else{
        console.error(error);
    }

    // 3a pregunt2
    if (document.getElementById('q3_r1').checked==true) {
        p3=1

    }else if(document.getElementById('q3_r2').checked==true){
        p3=0.5

    }else if(document.getElementById('q3_r3').checked==true) {       
        p3=0

    }else{
        console.error(error);
    }

    //4a pregunta 
    if (document.getElementById('q10_r1').checked==true) {
        p10=1

    }else if(document.getElementById('q10_r2').checked==true){
        p10=0.5

    }else if(document.getElementById('q10_r3').checked==true) {       
        p10=0

    }else{
        console.error(error);
    }

    // 5a pregunta
    if (document.getElementById('q4_r1').checked==true) {
        p4=1

    }else if(document.getElementById('q4_r2').checked==true){
        p4=0.5

    }else if(document.getElementById('q4_r3').checked==true) {       
        p4=0

    }else{
        console.error(error);
    }

    // 6a pregunta
    if (document.getElementById('q5_r1').checked==true) {
        p5=1

    }else if(document.getElementById('q5_r2').checked==true){
        p5=0.5

    }else if(document.getElementById('q5_r3').checked==true) {       
        p5=0

    }else{
        console.error(error);
    }

    // 7a pregunta
    if (document.getElementById('q6_r1').checked==true) {
        p6=1

    }else if(document.getElementById('q6_r2').checked==true){
        p6=0.5

    }else if(document.getElementById('q6_r3').checked==true) {       
        p6=0

    }else{
        console.error(error);
    }

    // 8a pregunta
    if (document.getElementById('q7_r1').checked==true) {
        p7=1

    }else if(document.getElementById('q7_r2').checked==true){
        p7=0.5

    }else if(document.getElementById('q7_r3').checked==true) {       
        p7=0

    }else{
        console.error(error);
    }

    // 9a pregunta
    if (document.getElementById('q8_r1').checked==true) {
        p8=1

    }else if(document.getElementById('q8_r2').checked==true){
        p8=0.5

    }else if(document.getElementById('q8_r3').checked==true) {       
        p8=0

    }else{
        console.error(error);
    }

    // 10a pregunta
    if (document.getElementById('q9_r1').checked==true) {
        p9=1

    }else if(document.getElementById('q9_r2').checked==true){
        p9=0.5

    }else if(document.getElementById('q9_r3').checked==true) {       
        p9=0

    }else{
        console.error(error);
    }

    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    alert(" Puntos totales :" + nota);
    if (nota > 4) {
        alert(" usted posiblemente tiene depresion")
    } else {
        alert(" usted posibelmente no tenga depresion")
    }
    
const userQ1_r = p1;
const userQ2_r = p2;
const userQ3_r = p3;
const userQ4_r = p4;
const userQ5_r = p5;
const userQ6_r = p6;
const userQ7_r = p7;
const userQ8_r = p8;
const userQ9_r = p9;
const userQ10_r = p10;
const userMaxP = nota;

EncuestaForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const newAnswer = {
        q1_r: userQ1_r.valueOf,
        q2_r: userQ2_r.valueOf,
        q3_r: userQ3_r.valueOf,
        q4_r: userQ4_r.valueOf,
        q5_r: userQ5_r.valueOf,
        q6_r: userQ6_r.valueOf,
        q7_r: userQ7_r.valueOf,
        q8_r: userQ8_r.valueOf,
        q9_r: userQ9_r.valueOf,
        q10_r: userQ10_r.valueOf,
        Max_Point: userMaxP.valueOf 
    }
    main.createAnswer(newAnswer)
})
    window.location = 'encuesta.html'
    location.href= 'index.html'
}