// Funkce pro animaci procentuálních hodnot
function animateStats() {
    // Zjistí, zda je element v průběhu scrollování viditelný v okně prohlížeče
    function isElementInViewport(el) {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Najde všechny stat-fill elementy
    const statFills = document.querySelectorAll('.stat-fill');

    // Kontroluje, zda jsou elementy viditelné a spouští animaci
    function checkVisibility() {
        if (statFills.length === 0) return;

        const clientsSection = document.querySelector('.clients-section');
        // Pokud je sekce viditelná, spustí animaci všech grafů
        if (clientsSection && isElementInViewport(clientsSection)) {
            statFills.forEach(fill => {
                const percentage = fill.getAttribute('data-percentage');
                fill.style.width = percentage + '%';
            });

            // Odstraní event listener po spuštění animace
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    // Kontroluje viditelnost při načtení stránky a při scrollování
    window.addEventListener('scroll', checkVisibility);

    // Kontroluje viditelnost i při načtení stránky
    checkVisibility();
}

// Po načtení DOMu spustí animační funkci
document.addEventListener('DOMContentLoaded', function() {
    // Skript pro popup na hlavní stránce
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

    // Inicializace animace procentuálních grafů
    animateStats();
});