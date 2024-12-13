function ValidarSelect() {
    var c=0;
    var pregunta1 = document.getElementById("actividad1A").value;
    var pregunta2 = document.getElementById("actividad1B").value;
    var pregunta3 = document.getElementById("actividad1C").value;
    var pregunta4 = document.getElementById("actividad1D").value;
    var pregunta5 = document.getElementById("actividad1E").value;
    var pregunta6 = document.getElementById("actividad1F").value;
    var pregunta7 = document.getElementById("actividad1G").value;
    if (pregunta1 == "un") {
        c++;
    }
    if (pregunta2 == "juego") {
        c++;
    }
    if (pregunta3 == "de") {
        c++;
    }
    if (pregunta4 == "palabras") {
        c++;
    }
    if (pregunta5 == "dificiles") {
        c++;
    }
    if (pregunta6 == "de") {
        c++;
    }
    if (pregunta7 == "decir") {
        c++;
    }
    document.getElementById("modalAuxTitle").innerHTML = "Notificación";
    if (c == 7) {
        document.getElementById("modalAuxBody").innerHTML = "<p>Las respuestas correctas fueron: "+c+" ¡Felicitaciones!!</p>"
    }else{
        document.getElementById("modalAuxBody").innerHTML = "<p>Intentalo de nuevo</p>"
    }
   $("#modalAuxiliar").modal("show");
}
function ValidarRadio() {
    var rta =0;
    var pregu1 = document.getElementsByName("pregunta1");
    if(pregu1[1].checked){
        rta ++;
    }
    document.getElementById("modalAuxTitle").innerHTML = "Notificación";
    if(rta == 1){
        document.getElementById("modalAuxBody").innerHTML = "<p>Muy bien, respuestas correctas: "+rta+", continua con la evaluación</p>"
    }else{
        document.getElementById("modalAuxBody").innerHTML = "<p>Sigue intentando</p>"
    }
    $("#modalAuxiliar").modal("show");
}