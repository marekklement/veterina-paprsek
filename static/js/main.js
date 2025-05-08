// Skript pro popup na hlavní stránce
document.addEventListener('DOMContentLoaded', function() {
    // Popup funkce
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

        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        const menuItems = menu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuToggle.contains(e.target) && menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
});