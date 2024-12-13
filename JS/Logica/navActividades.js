function CrearNav(){
    let navGeneral = '';
    let navHTML = document.getElementById("navLogica");
    navGeneral = '<li class="nav-item">'
    +'<a class="nav-link" href="../../Index.html">Inicio</a></li>'
    +'<li class="nav-item dropdown">'
    +'<a class="nav-link dropdown-toggle" href="#" '
    +'role="button" data-toggle="dropdown" aria-expanded="false">'
    + 'Literatura</a>'    
    +'<div class="dropdown-menu">'
    +'    <a class="dropdown-item icon-chevron-circle-right" href="../../Vistas/Unidad 1/Cuento.html"> Cuento</a>'
    +'    <a class="dropdown-item icon-chevron-circle-right" href="../../Vistas/Unidad 1/Trabalenguas.html"> Trabalenguas</a>'
    +'</div></li>'
    +'<li class="nav-item dropdown">'
    +'<a class="nav-link dropdown-toggle" href="#" '
    +'role="button" data-toggle="dropdown" aria-expanded="false">'
    + 'Semántica</a>'    
    +'<div class="dropdown-menu">'
    +'    <a class="dropdown-item icon-chevron-circle-right" href="../../Vistas/Unidad 2/Sustantivos.html"> Sustantivos</a>'
    +'</div></li>'
    +'<li class="nav-item dropdown">'
    +'<a class="nav-link dropdown-toggle" href="#" '
    +'role="button" data-toggle="dropdown" aria-expanded="false">'
    + 'Comunicación</a>'    
    +'<div class="dropdown-menu">'
    +'    <a class="dropdown-item icon-chevron-circle-right" href="../../Vistas/Unidad 3/comunicacion.html"> Medios de Comunicación</a>'
    +'</div></li>'
    +'<li class="nav-item dropdown">'
    +'<a class="nav-link dropdown-toggle" href="#" '
    +'role="button" data-toggle="dropdown" aria-expanded="false">'
    + 'Gramática</a>'    
    +'<div class="dropdown-menu">'
    +'    <a class="dropdown-item icon-chevron-circle-right" href="../../Vistas/Unidad 4/oracion.html"> Clases de Oraciones</a>'
    +'</div></li>';
    navHTML.insertAdjacentHTML("afterbegin",navGeneral);
}
function CrearModalAuxiliarNota() {
    let modalHtml = '';
    let modales = document.getElementById("section-auxiliar");
    modalHtml = '<div id="modalAuxiliar" class="modal fade" tabindex="1"'
    + ' role="dialog" aria-labelledby="ModalLabelBT"'
    + 'aria-hidden="false">'
    + '<div class="modal-dialog" role="document">'
    + '<div class="modal-content">'
    + '<div class="modal-header">'
    + '<h5 id="modalAuxTitle" class="modal-title"></h5>'
    + '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
    + '<span aria-hidden="true">&times;</span></button></div>'
    + '<div id="modalAuxBody" class="modal-body"></div>'
    + '</div></div></div>';
    modales.insertAdjacentHTML("beforeend", modalHtml);

}
document.addEventListener("DOMContentLoaded", function(){
    CrearNav();
    CrearModalAuxiliarNota();    
});
