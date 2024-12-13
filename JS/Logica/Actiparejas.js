document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'MP',
            img: '../../Multimedia/ImgU3/MP.jpg'
        },
        {
            name: 'MP',
            img: '../../Multimedia/ImgU3/MP.jpg'
        },
        {
            name: 'PeriodicoP',
            img: '../../Multimedia/ImgU3/PeriodicoP.jpg'
        },
        {
            name: 'PeriodicoP',
            img: '../../Multimedia/ImgU3/PeriodicoP.jpg'
        },
        {
            name: 'RadioP',
            img: '../../Multimedia/ImgU3/RadioP.jpg'
        },
        {
            name: 'RadioP',
            img: '../../Multimedia/ImgU3/RadioP.jpg'
        },
        {
            name: 'TelefonoP',
            img: '../../Multimedia/ImgU3/TelefonoP.jpg'
        },
        {
            name: 'TelefonoP',
            img: '../../Multimedia/ImgU3/TelefonoP.jpg'
        },
        {
            name: 'TVP',
            img: '../../Multimedia/ImgU3/TVP.jpg'
        },
        {
            name: 'TVP',
            img: '../../Multimedia/ImgU3/TVP.jpg'
        },
        {
            name: 'YoutubeP',
            img: '../../Multimedia/ImgU3/YoutubeP.jpg'
        },
        {
            name: 'YoutubeP',
            img: '../../Multimedia/ImgU3/YoutubeP.jpg'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());
    /*Orden aleatorio de las imagenes*/

    const cartas = document.querySelector('.cartas');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = []; /*Cartas elegidas*/
    let cardsChoosenId = []; /*Cartas elegidas id*/
    let cardsWon = [];  /*Parejas*/

    /*Crear tablero de juego */
    function createBoard() {/*Inicio createBoard */
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');/*Elemento a ser creado*/
            card.setAttribute('src', '../../Multimedia/ImgU3/blank.png');
            card.setAttribute('data-id', i);
            card.setAttribute('alt', cardArray[i].name);
            card.addEventListener('click', flipCard);
            cartas.appendChild(card);
        }
    }/*Fin createBoard */
    
    /*Buscar coincidencias */
    function checkForMatch() {
        const cards = document.querySelectorAll('.cartas img');
        const optionOneId = cardsChoosenId[0];
        const optionTwoId = cardsChoosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src','../../Multimedia/ImgU3/blank.png');
            cards[optionTwoId].setAttribute('src','../../Multimedia/ImgU3/blank.png');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src','../../Multimedia/ImgU3/white.png');
            cards[optionTwoId].setAttribute('src','../../Multimedia/ImgU3/white.png');
            cards[optionOneId].removeEventListener('click',flipCard);
            cards[optionTwoId].removeEventListener('click',flipCard);
            cardsWon.push(cardsChosen);/*Llamado a ventana modal*/
            document.getElementById("modalAuxTitle").innerHTML = "Notificación";
            document.getElementById("modalAuxBody").innerHTML = "<p>Muy bien encontró una pareja</p>"
            $("#modalAuxiliar").modal("show");
        } else {
            cards[optionOneId].setAttribute('src','../../Multimedia/ImgU3/blank.png');
            cards[optionTwoId].setAttribute('src','../../Multimedia/ImgU3/blank.png');
            /*Llamado a modal o nada*/
            document.getElementById("modalAuxTitle").innerHTML = "Notificación";
            document.getElementById("modalAuxBody").innerHTML = "<p>Sigue intentando</p>"
            $("#modalAuxiliar").modal("show");
        }
        cardsChosen = [];
        cardsChoosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "!Felicidades...¡";
            document.getElementById("modalAuxTitle").innerHTML = "Notificación";
            document.getElementById("modalAuxBody").innerHTML = "<p>¡Felicitaciones!</p>"
            $("#modalAuxiliar").modal("show");
            /*Llamar a ventana modal*/
        }

    }/*Fin de checkForMatch*/
    /*Girar cartas*/
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChoosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    /* Llamado a funcion */
    createBoard();
});