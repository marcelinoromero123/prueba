document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    const juegos = document.querySelectorAll('.game-card');

    buscador.addEventListener('keyup', (e) => {
        const texto = e.target.value.toLowerCase();

        juegos.forEach(juego => {
            const nombre = juego.querySelector('span').textContent.toLowerCase();
            
            // Si el nombre incluye lo que escribimos, se muestra, si no, se oculta
            if (nombre.includes(texto)) {
                juego.style.display = 'block';
            } else {
                juego.style.display = 'none';
            }
        });
    });
});