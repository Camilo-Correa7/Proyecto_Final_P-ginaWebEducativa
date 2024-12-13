var cart = 1;
function Cartas3() {
    switch (cart) {
        case 1:
            document.getElementById('cart1').style.display="block";
            document.getElementById('cart2').style.display="none";
            document.getElementById('cart3').style.display="none";
            document.getElementById('cart4').style.display="none";
            document.getElementById('cartasimg').src="../../Multimedia/ImgU3/medios.jpg";
            cart ++;
            break;
        case 2:
            document.getElementById('cart2').style.display="block";
            document.getElementById('cart3').style.display="none";
            document.getElementById('cart4').style.display="none";
            document.getElementById('cart1').style.display="none";
            document.getElementById('cartasimg').src="../../Multimedia/ImgU3/tv.jpg";
            cart ++;
            break;
        case 3:
            document.getElementById('cart3').style.display="block";
            document.getElementById('cart4').style.display="none";
            document.getElementById('cart1').style.display="none";
            document.getElementById('cart2').style.display="none";
            document.getElementById('cartasimg').src="../../Multimedia/ImgU3/periodico.jpg";
            cart ++;
            break;
        case 4:
            document.getElementById('cart4').style.display="block";
            document.getElementById('cart1').style.display="none";
            document.getElementById('cart2').style.display="none";
            document.getElementById('cart3').style.display="none";
            document.getElementById('cartasimg').src="../../Multimedia/ImgU3/radio.jpg";
            cart = 1;
            break;        
        default:
    }
}/*Fin Cartas3()*/
