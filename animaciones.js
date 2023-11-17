//Cuando hago click en reservar mesa, se abre link externo
document.getElementById('reservarBtn').addEventListener('click', function() {
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