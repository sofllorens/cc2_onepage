//Cuando hago click en reservar mesa, se abre link externo
document.getElementById('reservarBtn').addEventListener('click', function() {
    window.open('https://ninogordo.meitre.com/', '_blank');
});

document.getElementById('reservarBtn2').addEventListener('click', function() {
    window.open('https://ninogordo.meitre.com/', '_blank');
});


//Cuando scrolleo por ID, la sección queda en el centro de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - (window.innerHeight - targetElement.clientHeight) / 2;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


//Botón de leer más y leer menos

function toggleContent(cardId) {
    const card = document.getElementById(cardId);
    const hiddenContent = card.querySelector('.hidden-content');
    const button = card.querySelector('button');

    if (hiddenContent.style.maxHeight) {
        hiddenContent.style.maxHeight = null;
        button.textContent = 'Leer más';
    } else {
        hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
        button.textContent = 'Leer menos';
    }
}


//Spotify

document.getElementById('btnAbrirSpotify').addEventListener('click', function() {
    window.open('https://open.spotify.com/playlist/2UNWb18APe1uROQcPtMJqS?si=nstTSwtQRUah62xBMOAu1g&nd=1&dlsi=85a171c19ee34ea7', '_blank');
});

function abrirSpotify() {
    window.location.href = 'spotify:https://open.spotify.com/playlist/2UNWb18APe1uROQcPtMJqS?si=5ef24b64650544f4';
}

// Asocia la función al evento click del botón
document.getElementById('btnAbrirSpotify').addEventListener('click', abrirSpotify);


