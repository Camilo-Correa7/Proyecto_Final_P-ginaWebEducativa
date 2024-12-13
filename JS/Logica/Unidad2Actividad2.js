var correctas = 0, incorrectas = 0;
function moverObjeto(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    /*Guardo el ID del objeto que arrastro en una variable llamada "text"*/ 
}
function soltarObjeto(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var drop = ev.target.id;
    ev.target.appendChild(document.getElementById(data));
}
function mientrasArrastro(ev) {
    ev.preventDefault();
}
function ValEva(){
    let datos = document.getElementById("listaElement").children.length;
    correctas = 0;
    incorrectas = 0;
    if(datos>0){
        document.getElementById("modalAuxTitle").innerHTML = "Notificación";
        document.getElementById("modalAuxBody").innerHTML = "<p>Falta completar la actividad, elementos faltantes: "+datos+"</p>";
        $("#modalAuxiliar").modal('show');
    }else{
        //Accedo a parejas A y cuento cuantos elementos tiene 
        let caja1 = document.getElementById("SolPA").children.length;
        for(let i=0; i<= caja1-1;i++){
            let elemt = document.getElementById("SolPA").children[i].id;
            if (elemt == "arrT01" || elemt == "arrT04" || elemt == "arrT05" || elemt == "arrT06" || elemt == "arrT10"){
                correctas ++;
                document.getElementById("auxPA").innerHTML="Correctas: "+correctas;
                
            }else{
                incorrectas ++;
                document.getElementById("auxPB").innerHTML="Incorrectas: "+incorrectas;
                
            }
        }
        let caja2= document.getElementById("SolPB").children.length;
        for(let i=0; i<= caja2-1;i++){
            let elemt2 = document.getElementById("SolPB").children[i].id;
            if (elemt2 == "arrT02" || elemt2 == "arrT03" || elemt2 == "arrT07" || elemt2 == "arrT08" || elemt2 == "arrT09"){
                correctas ++;
                document.getElementById("auxPA").innerHTML="Correctas: "+correctas;
                
  
            }else{
                incorrectas ++;
                document.getElementById("auxPB").innerHTML="Incorrectas: "+incorrectas;
                
            }
        }
    }
}
var aux = 1;
function M_CartasA1(){
    switch(aux){
        case 1:
            document.getElementById('carta01').style.display="block";
            document.getElementById('carta02').style.display="none";
            document.getElementById('carta03').style.display="none";
            document.getElementById('carta04').style.display="none";
            document.getElementById('carta05').style.display="none";
            document.getElementById('carta06').style.display="none";
            document.getElementById('imgCarta').src="../../Multimedia/ImgU2/suscomun.jpg";
            aux ++;
            break;
        case 2:
            document.getElementById('carta02').style.display="block";
            document.getElementById('carta03').style.display="none";
            document.getElementById('carta04').style.display="none";
            document.getElementById('carta05').style.display="none";
            document.getElementById('carta06').style.display="none";
            document.getElementById('carta01').style.display="none";
            document.getElementById('imgCarta').src="../../Multimedia/ImgU2/suspropio.jpg";
            aux ++;
            break;
        case 3:
            document.getElementById('carta03').style.display="block";
            document.getElementById('carta04').style.display="none";
            document.getElementById('carta05').style.display="none";
            document.getElementById('carta06').style.display="none";
            document.getElementById('carta01').style.display="none";
            document.getElementById('carta02').style.display="none";
            document.getElementById('imgCarta').src="../../Multimedia/ImgU2/susconcreto.jpg";
            aux ++;
            break;
        case 4:
            document.getElementById('carta04').style.display="block";
            document.getElementById('carta05').style.display="none";
            document.getElementById('carta06').style.display="none";
            document.getElementById('carta01').style.display="none";
            document.getElementById('carta02').style.display="none";
            document.getElementById('carta03').style.display="none";
            document.getElementById('imgCarta').src="../../Multimedia/ImgU2/susabstracto.jpg";
            aux ++;
            break;
        case 5:
            document.getElementById('carta05').style.display="block";
            document.getElementById('carta06').style.display="none";
            document.getElementById('carta01').style.display="none";
            document.getElementById('carta02').style.display="none";
            document.getElementById('carta03').style.display="none";
            document.getElementById('carta04').style.display="none";
            document.getElementById('imgCarta').src="../../Multimedia/ImgU2/susindividual.jpg";
            aux ++;
            break;
        case 6:
            document.getElementById('carta06').style.display="block";
            document.getElementById('carta01').style.display="none";
            document.getElementById('carta02').style.display="none";
            document.getElementById('carta03').style.display="none";
            document.getElementById('carta04').style.display="none";
            document.getElementById('carta05').style.display="none";
            document.getElementById('imgCarta').src="../../Multimedia/ImgU2/suscolectivo.jpg";
            aux = 1;
            break;
        default:
    }
}/*Fin M_CartasA1*/
//Actividad 1 refuerzo 
function ValidarRadio() {
    var respuestas = 0;
    var pregunta1 = document.getElementsByName("preg1");
    var pregunta2 = document.getElementsByName("preg2");
    var pregunta3 = document.getElementsByName("preg3");
    var pregunta4 = document.getElementsByName("preg4");
    if (pregunta1[1].checked) {
        respuestas++;
    }
    if (pregunta2[0].checked) {
        respuestas++;
    }
    if (pregunta3[0].checked) {
        respuestas++;
    }
    if (pregunta4[2].checked) {
        respuestas++;
    }
    document.getElementById("modalAuxTitle").innerHTML = "Notificación";
   if (respuestas==4) {
    document.getElementById("modalAuxBody").innerHTML = "<p>Las respuestas correctas fueron: "+respuestas+ " ¡Felicitaciones!!</p>"
   }else{
    document.getElementById("modalAuxBody").innerHTML = "<p>Vuelve a intentarlo</p>"
   }
   $("#modalAuxiliar").modal("show");
}
//Actividad 2 refuerzo
function MoverObjetos(ev) {
    ev.dataTransfer.setData("texto", ev.target.id);
}
function SoltarObjetos(ev) {
    var datab = ev.dataTransfer.getData("texto");
    var drop = ev.target.id;
    ev.target.appendChild(document.getElementById(datab));
}
function mientrasArrastroB(ev) {
    ev.preventDefault();
}
function Validar() {
    var co=0;
    var inc=0;
    let datosb = document.getElementById("ListaElementos").children.length;
    if(datosb>0){
        document.getElementById("modalAuxTitle").innerHTML = "Notificación";
        document.getElementById("modalAuxBody").innerHTML = "<p>Falta completar la actividad, elementos faltantes: "+datosb+"</p>";
        $("#modalAuxiliar").modal('show');
    }else{
        let cajon1 = document.getElementById("SoltarPA").children.length;
        for(let i=0; i<= cajon1-1;i++){
            let elemtos1 = document.getElementById("SoltarPA").children[i].id;
            if (elemtos1 == "arrastrarT01" || elemtos1 == "arrastrarT08" || elemtos1 == "arrastrarT12"){
                co ++;
            }else{
                inc ++;
            }
        }
        let cajon2= document.getElementById("SoltarPB").children.length;
        for(let i=0; i<= cajon2-1;i++){
            let elemtos2 = document.getElementById("SoltarPB").children[i].id;
            if (elemtos2 == "arrastrarT03" || elemtos2 == "arrastrarT05" || elemtos2 == "arrastrarT09"){
                co ++;
            }else{
                inc ++;   
            }
        }
        let cajon3= document.getElementById("SoltarPC").children.length;
        for(let i=0; i<= cajon3-1;i++){
            let elemtos3 = document.getElementById("SoltarPC").children[i].id;
            if (elemtos3 == "arrastrarT06" || elemtos3 == "arrastrarT07" || elemtos3 == "arrastrarT11"){
                co ++;
            }else{
                inc ++;
            }
        }
        let cajon4= document.getElementById("SoltarPD").children.length;
        for(let i=0; i<= cajon4-1;i++){
            let elemtos4 = document.getElementById("SoltarPD").children[i].id;
            if (elemtos4 == "arrastrarT04" || elemtos4 == "arrastrarT02" || elemtos4 == "arrastrarT10"){
                co ++;
            }else{
                inc ++;
            }
        }
        document.getElementById("modalAuxTitle").innerHTML = "Notificación";
        if (co == 12) {
            document.getElementById("modalAuxBody").innerHTML = "<p>Felicitaciones tus respuestas correctas son: "+co+"</p>";
        }else{
            document.getElementById("modalAuxBody").innerHTML = "<p>Respuestas incorrectas son: "+inc+""+" intentalo de nuevo"+"</p>";
        }
        $("#modalAuxiliar").modal('show');
    }
}