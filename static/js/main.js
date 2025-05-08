// Skript pro popup na hlavní stránce
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('main-popup');
    if (popup) {
        // Zobrazit popup po 2 sekundách
        setTimeout(() => {
            popup.style.display = 'flex';
        }, 2000);

        // Zavřít popup po kliknutí na křížek
        const closeBtn = popup.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                popup.style.display = 'none';
            });
        }

        // Zavřít popup po kliknutí mimo obsah
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});