const toggler = document.getElementById('toggler');
const navbar = document.getElementById('navbar');

toggler.addEventListener('click', event => {
    event.preventDefault();
    navbar.classList.toggle('show');
});