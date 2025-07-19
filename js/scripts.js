document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');
    const menuIcon = document.getElementById('menu-icon');
    const menuPath = document.getElementById('menu-path');

    let estaAberto = false;

    mobileMenuButton.addEventListener('click', () => {
        estaAberto = !estaAberto;

        if (estaAberto) {
            mobileMenu.classList.remove('max-h-0', 'opacity-0');
            mobileMenu.classList.add('max-h-[300px]', 'opacity-100');
            menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        } else {
            mobileMenu.classList.remove('max-h-[300px]', 'opacity-100');
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            menuPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('max-h-[300px]', 'opacity-100');
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            estaAberto = false;
            menuPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
        });
    });
});
