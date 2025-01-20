
// script.js

// Scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animações ao rolar a página
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.animated-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Inicializar animações
window.dispatchEvent(new Event('scroll'));
