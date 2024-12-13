//Función para validar Texto
function ValidarText(){
    var rep = 0;
    var pregunta1 = document.getElementById("Pregunta1").value;
    var pregunta2 = document.getElementById("Pregunta2").value;
    var pregunta3 = document.getElementById("Pregunta3").value;
    var pregunta4 = document.getElementById("Pregunta4").value;
    var pregunta5 = document.getElementById("Pregunta5").value;
    var pregunta6 = document.getElementById("Pregunta6").value;
    if (pregunta1.toLowerCase()=="televisor") {
        rep ++;  
    }
    if (pregunta2.toLowerCase()=="cartas") {
        rep ++;  
    }
    if (pregunta3.toLowerCase()=="radio") {
        rep ++;  
    }
    if (pregunta4.toLowerCase()=="celular") {
        rep ++;  
    }
    if (pregunta5.toLowerCase()=="periodico") {
        rep ++;  
    }
    if (pregunta6.toLowerCase()=="telefono") {
        rep ++;  
    }
    document.getElementById("modalAuxTitle").innerHTML = "Notificación";
    if(rep == 6){
        document.getElementById("modalAuxBody").innerHTML = "<p>Muy bien, respuestas correctas: "+rep+"</p>"
    }else{
        document.getElementById("modalAuxBody").innerHTML = "<p>Sigue intentando</p>"
    }
    $("#modalAuxiliar").modal("show"); 
}
function ValidarRadio() {
    var rta =0;
    var pregu1 = document.getElementsByName("pregunta1");
    var pregu2 = document.getElementsByName("pregunta2");
    var pregu3 = document.getElementsByName("pregunta3");
    var pregu4 = document.getElementsByName("pregunta4");
    var pregu5 = document.getElementsByName("pregunta5");
    var pregu6 = document.getElementsByName("pregunta6");
    if(pregu1[3].checked){
        rta ++;
    }
    if(pregu2[1].checked){
        rta ++;
    }
    if(pregu3[2].checked){
        rta ++;
    }
    if(pregu4[1].checked){
        rta ++;
    }
    if(pregu5[1].checked){
        rta ++;
    }
    if(pregu6[2].checked){
        rta ++;
    }
    document.getElementById("modalAuxTitle").innerHTML = "Notificación";
    if(rta == 6){
        document.getElementById("modalAuxBody").innerHTML = "<p>Muy bien, respuestas correctas: "+rta+", continua con la evaluación</p>"
    }else{
        document.getElementById("modalAuxBody").innerHTML = "<p>Sigue intentando</p>"
    }
    $("#modalAuxiliar").modal("show");
}
/*
    .toLowerCase() = Minusculas
        .toLocaleLowerCase() = Minusculas
    .toUpperCase() = Mayusculas
        .toLocaleUpperCase() = Mayusculas
    */