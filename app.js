
const menuIcon = document.getElementById('menu-icon');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');
const menuLinks = navMenu.querySelectorAll('ul li a');

menuIcon.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.add('show');
  menuIcon.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.remove('show');
  menuIcon.classList.remove('active');
});

