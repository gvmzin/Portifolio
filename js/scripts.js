document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');

    let estaAberto = false;

    mobileMenuButton.addEventListener('click', () => {
        estaAberto = !estaAberto;

        if (estaAberto) {
            mobileMenu.classList.remove('max-h-0', 'opacity-0');
            mobileMenu.classList.add('max-h-[300px]', 'opacity-100');
        } else {
            mobileMenu.classList.remove('max-h-[300px]', 'opacity-100');
            mobileMenu.classList.add('max-h-0', 'opacity-0');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('max-h-[300px]', 'opacity-100');
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            estaAberto = false;
        });
    });
});
