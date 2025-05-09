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

// Funkce pro ovládání scroll-to-top tlačítka
function initScrollToTop() {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    if (!scrollToTopButton) return;

    // Zobrazí nebo skryje tlačítko podle pozice scrollu
    function toggleScrollToTopButton() {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    }

    // Přidání event listeneru pro scroll
    window.addEventListener('scroll', toggleScrollToTopButton);

    // Přidání event listeneru pro kliknutí na tlačítko
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Inicializace při načtení stránky
    toggleScrollToTopButton();
}

// Po načtení DOMu spustí animační funkci
document.addEventListener('DOMContentLoaded', function() {
    // Inicializace scroll-to-top tlačítka
    initScrollToTop();

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

                // Přidání active class na kliknutou položku menu
                menuItems.forEach(menuItem => menuItem.classList.remove('active'));
                item.classList.add('active');
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

    // Funkce pro zvýraznění menu položky podle aktuální sekce
    function highlightMenuOnScroll() {
        // Získání všech sekcí a menu položek
        const sections = document.querySelectorAll('#home, #onas, #coumime, #aktuality, #kolektiv, #rozpis, #kontakt');
        const menuItems = document.querySelectorAll('.menu a');

        if (sections.length === 0 || menuItems.length === 0) return;

        // Kontrola, která sekce je aktuálně viditelná
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= (sectionTop - 100) && window.scrollY < (sectionTop + sectionHeight - 100)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Zvýraznění odpovídající položky menu
        if (currentSectionId) {
            menuItems.forEach(item => {
                item.classList.remove('active');
                const href = item.getAttribute('href');
                if (href && href.includes('#' + currentSectionId)) {
                    item.classList.add('active');
                }
            });
        }
    }

    // Přidání event listeneru pro scroll
    window.addEventListener('scroll', highlightMenuOnScroll);

    // Inicializace při načtení stránky
    highlightMenuOnScroll();

    // Inicializace animace procentuálních grafů
    animateStats();
});
