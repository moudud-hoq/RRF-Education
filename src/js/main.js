// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navClose = document.querySelector('.nav-close');
const body = document.body;

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

navClose.addEventListener('click', () => {
    nav.classList.remove('active');
    body.style.overflow = '';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        body.style.overflow = '';
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        body.style.overflow = '';
    });
}); 