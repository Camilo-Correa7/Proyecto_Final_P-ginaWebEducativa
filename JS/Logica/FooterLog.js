function CrearFooter() {
    let elFooter = document.getElementById("piePagina");
    let HTMLFooter = '<p><br>'
        + '<img src="../../Multimedia/Identidad/Licencia.png"'
        + 'alt="Atribución-NoComercial-SinDerivadas: Permite a otras sólo descargar sus obras y compartirlas con otras siempre y cuando den crédito, pero no pueden cambiarlas de forma alguna ni usarlas de forma comercial.">'
        + '<br>Correa Moyano y Rivera Tocarruncho, 2023</p>';
        elFooter.insertAdjacentHTML("afterbegin", HTMLFooter);
}
function MenuComplementario() {
    let navHTMLCom = '<li class="nav-item dropdown">'
    +'<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"'
    +'aria-expanded="false">Información</a>'
    +'<div class="dropdown-menu">'
        +'<a class="dropdown-item" data-toggle="modal" data-target="#modalCreditos"><span class="icon icon-users2 text-info"></span> Créditos</a>'
        +'<a class="dropdown-item" data-toggle="modal" data-target="#modalObjetivos"><span class="icon-chevron-circle-right"></span> Objetivos</a>'
    +'</div>'
+'</li>';
let navCom = document.getElementById('navLogica');
navCom.insertAdjacentHTML("beforeend",navHTMLCom);
}
function CrearModalCreditos(){
    let HTMLModalCreditos = '<div class="modal fade" id="modalCreditos" tabindex="1" role="dialog" aria-labelledby="ModalLabelBT" aria-hidden="false"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Créditos</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body text-center row"><div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"><img src="../../Multimedia/Index/Pacho.jpg" alt="Foto Camilo Correa" width="200px"><p>Camilo Andres Correa Moyano</p></div><div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"><img src="../../Multimedia/Index/Josemor.jpg" alt="Foto Jose Rivera" width="200px" height="200px"><p>Jose Egdimber Rivera Tocarruncho</p></div><div class="col-12"><p>2023</p></div></div></div></div></div>';

    let ElFooter = document.querySelector('footer');
    ElFooter.insertAdjacentHTML("beforeend",HTMLModalCreditos);
}
function CrearModalObjetivos(){
    let HTMLModalCreditos = '<div class="modal fade" id="modalObjetivos" tabindex="1" role="dialog" aria-labelledby="ModalLabelBT" aria-hidden="false"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Objetivos</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body text-center row"><div class="text-center"><p><b>Objetivo General</b></p><p class="text-justify">- Desarrollar habilidades lingüísticas tanto en la comprensión como en la expresión oral y escrita.</p><p><b>Objetivos Específicos</b></p><p class="text-justify">- Analizar la habilidad de los estudiantes de grado Segundo en la lengua española del Colegio Gimnasio Juan de Castellanos.</p><p class="text-justify">- Identificar los sustantivos de la lengua española y sus formas de aplicarlo en la lengua castellana.</p><p class="text-justify">- Evaluar los temas propuestos en el Material Educativo Digital, evidenciando avances significativos y así realizar los ajustes correspondientes.</p></div><div class="col-12"><p>2023</p></div></div></div></div></div>';

    let ElFooter = document.querySelector('footer');
    ElFooter.insertAdjacentHTML("beforeend",HTMLModalCreditos);
}
document.addEventListener("DOMContentLoaded",function(){
    CrearFooter();
    MenuComplementario();
    CrearModalCreditos();
    CrearModalObjetivos()
});