
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const logo = document.querySelector('.animated-logo');

    if (logo) {
        logo.addEventListener('mouseover', () => {
            logo.style.transition = 'transform 0.5s ease-in-out';
            logo.style.transform = 'rotate(10deg)';
        });

        logo.addEventListener('mouseout', () => {
            logo.style.transition = 'transform 0.5s ease-in-out';
            logo.style.transform = 'rotate(0deg)';
        });
    }

    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Por favor, completa todos los campos.');
            }
        });
    }
