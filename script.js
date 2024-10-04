document.addEventListener('DOMContentLoaded', function () {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const loveMessage = document.getElementById('love-message');
    const body = document.body;

    // Mover el botón de "No" cuando el cursor se acerque
    noButton.addEventListener('mouseenter', function () {
        const container = document.querySelector('.container');
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        
        const randomX = Math.floor(Math.random() * (containerWidth - noButton.clientWidth));
        const randomY = Math.floor(Math.random() * (containerHeight - noButton.clientHeight));

        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    });

    // Cambiar la imagen de fondo y mostrar mensaje de amor cuando se haga clic en "Sí"
    yesButton.addEventListener('click', function () {
        loveMessage.classList.remove('hidden');
        body.style.backgroundImage = "url('background-amor.jpg')"; // Cambia la imagen de fondo
    });
});
