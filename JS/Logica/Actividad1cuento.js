//Función validar RadioButton
function validarRadio() {
    var correctas=0;
    var prg1 = document.getElementsByName("preg1");
    var prg2 = document.getElementsByName("preg2");
    var prg3 = document.getElementsByName("preg3");
    var prg4 = document.getElementsByName("preg4");
   if (prg1[1].checked) {
    correctas ++;
   }
   if (prg2[0].checked) {
    correctas++;
   }
   if (prg3[0].checked) {
    correctas++;
   }
   if (prg4[2].checked) {
    correctas++;
   }
   document.getElementById("modalAuxTitle").innerHTML = "Notificación";
   if (correctas==4) {
    document.getElementById("modalAuxBody").innerHTML = "<p>Las respuestas correctas fueron: "+correctas+ " ¡Felicitaciones!!</p>"
   }else{
    document.getElementById("modalAuxBody").innerHTML = "<p>Vuelve a intentar</p>"
   }
   $("#modalAuxiliar").modal("show");
}
//Validar selección
function ValidarSelect() {
    var c=0;
    var pregunta1 = document.getElementById("actividad1").value;
    var pregunta2 = document.getElementById("actividad1B").value;
    var pregunta3 = document.getElementById("actividad1C").value;
    if (pregunta1 == "Inicio") {
        c++;
    }
    if (pregunta2 == "Nudo") {
        c++;
    }
    if (pregunta3 == "Desenlace") {
        c++;
    }
    document.getElementById("modalAuxTitle").innerHTML = "Notificación";
    if (c == 3) {
        document.getElementById("modalAuxBody").innerHTML = "<p>Las respuestas correctas fueron: "+c+" ¡Felicitaciones!!</p>"
    }else{
        document.getElementById("modalAuxBody").innerHTML = "<p>Intentalo de nuevo</p>"
    }
   $("#modalAuxiliar").modal("show");
}
//Validar selección 2
function ValidarSelect2() {
    var p=0;
    var question1 = document.getElementById("actividad2A").value;
    var question2 = document.getElementById("actividad2B").value;
    var question3 = document.getElementById("actividad2C").value;
    var question4 = document.getElementById("actividad2D").value;
    var question5 = document.getElementById("actividad2E").value;
    if (question1 == "frondoso") {
        p++;
    }
    if (question2 == "habilidades") {
        p++;
    }
    if (question3 == "mosquito") {
        p++;
    }
    if (question4 == "orgullo") {
        p++;
    }
    if (question5 == "lamentos") {
        p++;
    }
    document.getElementById("modalAuxTitle").innerHTML = "Notificación";
    if (p == 5) {
        document.getElementById("modalAuxBody").innerHTML = "<p>Las respuestas correctas fueron: "+p+" ¡Felicitaciones!! puedes continuar</p>"
    } else {
        document.getElementById("modalAuxBody").innerHTML = "<p>Intentalo de nuevo</p>"
    }
    $("#modalAuxiliar").modal("show");
}

function soltarObjeto(ev) {
    ev.preventDefault();
    var data= ev.dataTransfer.getData("text");
    var drop = ev.target.id;
    if(data == "arrT01" && drop == "conte1"){
        ev.target.appendChild(document.getElementById(data));
    } 
    if(data == "arrT02" && drop == "conte2"){
        ev.target.appendChild(document.getElementById(data));
    }   
    if(data == "arrT03" && drop == "conte3"){
        ev.target.appendChild(document.getElementById(data));
    } 
    if(data == "arrT04" && drop == "conte4"){
        ev.target.appendChild(document.getElementById(data));
    } 
    if(data == "arrT05" && drop == "conte5"){
        ev.target.appendChild(document.getElementById(data));
    } 
    if(data == "arrT06" && drop == "conte6"){
        ev.target.appendChild(document.getElementById(data));
    } 
    if(data == "arrT07" && drop == "conte7"){
        ev.target.appendChild(document.getElementById(data));
    } 
}

function ValEva() {
    let datos = document.getElementById("listaElement").children.length;

    if(datos>0){
        document.getElementById("modTitulo").innerHTML = "Notificación";
        document.getElementById("modBody").innerHTML = "<p>Falta completar la actividad<br> Elementos faltantes: "+datos+"</p>";
        $("#modalAuxiliar").modal("show");
    }else{
        document.getElementById("modTitulo").innerHTML = "Notificación";
        document.getElementById("modBody").innerHTML = "<p>Felicidades actividad completada</p>";
        $("#modalAuxiliar").modal("show");
    }
    
}

function mientrasArrastro(ev) {
    ev.preventDefault();
}