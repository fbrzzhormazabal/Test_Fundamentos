function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;
    // 1a pregunta
    if (document.getElementById('q1_r1').checked==true) {
        p1=1
    }else if(document.getElementById('q1_r2').checked==true){
        p1=0.5
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
    if (nota > 4) {
        alert(" usted probablemente tenga depresion ")
    } else {
        alert(" usted probablemente no tenga depresion ")
    }
   
    alert(" Puntos totales :" + nota);
    window.location = 'encuesta.html'
    location.href= 'resultados.html'   
}