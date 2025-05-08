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

        // Zavřít popup po kliknutí mimo obsah
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }

    // Hamburger menu funkce
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Zavření menu po kliknutí na položku menu
        const menuItems = menu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Zavření menu po kliknutí mimo menu
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuToggle.contains(e.target) && menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // Oprava pro kotvy na mobilních zařízeních - zajistí správné rolování na danou sekci
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Získání cíle kotvy
            const targetId = this.getAttribute('href').split('#')[1];
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();

                    // Drobné zpoždění pro mibilní zařízení, aby se stihlo zavřít menu
                    setTimeout(() => {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70, // Hodnotu je potřeba přizpůsobit výšce fixní hlavičky
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            }
        });
    });
});