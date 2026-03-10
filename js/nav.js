// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen);
});

// Close menu when any nav link is clicked
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});
